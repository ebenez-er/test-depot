import { UtilsService } from 'src/app/services/utils.service';
import { Injectable, inject } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/compat/auth';
import { finalize } from 'rxjs/operators';
import { AngularFireUploadTask } from '@angular/fire/compat/storage';


import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject ,TaskEvent, UploadTaskSnapshot } from 'firebase/storage';

import{createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile,sendPasswordResetEmail } from 'firebase/auth'
import { User } from '../model/user.model';
import{ AngularFirestore } from '@angular/fire/compat/firestore'
import { getFirestore, setDoc, doc , getDoc, updateDoc, deleteDoc, query, collection, getDocs, where} from "@angular/fire/firestore";
import { Role } from '../model/role.model';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  getUsersCountByRole(arg0: string): import("rxjs").Observable<number> {
    throw new Error('Method not implemented.');
  }


  private storage = getStorage();

  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private utilsService: UtilsService
  ) {}




  getAuth(){
    return getAuth();
  }

  async signIn(user: User) {
    try {
      return signInWithEmailAndPassword(getAuth(), user.email, user.password);
    } catch (error) {
      console.error('Erreur lors de la connexion:', error.message);
      // Affichez un message d'erreur à l'utilisateur si nécessaire
      throw error; // Propagez l'erreur pour la gérer ailleurs si besoin
    }
  }

  async signUp(user: User) {
    try {
      return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error.message);
      // Affichez un message d'erreur à l'utilisateur si nécessaire
      throw error; // Propagez l'erreur pour la gérer ailleurs si besoin
    }
  }


  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, {displayName})


  }

   //-- mot de passe oublier--

   sendRecoveryEmail(email: string){
    return sendPasswordResetEmail(getAuth(), email);
  }

  signOut() {
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utilsService.router.navigate(['/login']);
  }

  SetDocument(path:string , data: any) {

    return setDoc(doc(getFirestore(), path),data);
  }

  async getDocument(path: string){
    return  (await getDoc(doc(getFirestore(), path))).data();

   }

   async updateDoc(collection: string, docId: string, updatedData: any): Promise<void> {
    const path = `${collection}/${docId}`;
    return updateDoc(doc(getFirestore(), path), updatedData);
  }

  async deleteDoc(collection: string, docId: string): Promise<void> {
    const path = `${collection}/${docId}`;
    return deleteDoc(doc(getFirestore(), path));
  }

  // Télécharger une image
  async downloadImage(imagePath: string): Promise<string> {
    const imageRef = ref(this.storage, imagePath);
    return getDownloadURL(imageRef);
  }

  // Supprimer une image
  async deleteImage(imagePath: string): Promise<void> {
    const imageRef = ref(this.storage, imagePath);
    return deleteObject(imageRef);
  }

  // Téléverser une image
  async uploadImage(file: File, destinationPath: string): Promise<string> {
    const metadata = { contentType: 'image/jpeg' };
    const storageRef = ref(this.storage, destinationPath + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    await uploadTask;

    return getDownloadURL(uploadTask.snapshot.ref);
  }

  // Récupérer la liste des utilisateurs avec leurs rôles et statuts
async getUsersList(): Promise<User[]> {
  const usersSnapshot = await getDocs(collection(getFirestore(), 'users'));
  const usersList: User[] = [];

  usersSnapshot.forEach((userDoc) => {
    const userData = userDoc.data();
    const user: User = {
      id: userDoc.id,
      email: userData['email'],
      role: userData['role'],
      lastName: '',
      firstName: '',
      phoneNumber: '',
      address: '',
      active: false,
      displayName: '',
      password: '',
      permissions: {
        canEdit: false
      }
    };

    usersList.push(user);
  });

  return usersList;
}



// Récupérer les détails d'un utilisateur individuel
async getUserDetails(uid: string): Promise<User> {
  const userDoc = await getDoc(doc(getFirestore(), 'users', uid));
  const userData = userDoc.data();

  const user: User = {
    id: userDoc.id,

    email: userData['email'],
    role: userData['role'],
    lastName:  userData['lastName'],
    firstName:  userData['firstName'],
    phoneNumber:  userData['phoneNumber'],
    address:  userData['address'],
    active:  userData['active'],
    displayName:  userData['displayName'],
    password: userData['password'],
    permissions: {
      canEdit:  userData['canEdit'],

    },
    // Ajout des champs manquants

    // Ajoutez d'autres propriétés selon les besoins
  };

  return user;
}


  // Récupérer le nombre total d'utilisateurs
  async getTotalUsersCount(): Promise<number> {
    const usersSnapshot = await getDocs(collection(getFirestore(), 'users'));
    return usersSnapshot.size;
  }

  // Récupérer le nombre d'utilisateurs actifs
  async getActiveUsersCount(): Promise<number> {
    const activeUsersSnapshot = await getDocs(
      query(collection(getFirestore(), 'users'), where('status', '==', 'active'))
    );
    return activeUsersSnapshot.size;
  }

  // Récupérer le nombre d'utilisateurs inactifs
  async getInactiveUsersCount(): Promise<number> {
    const inactiveUsersSnapshot = await getDocs(
      query(collection(getFirestore(), 'users'), where('status', '==', 'inactive'))
    );
    return inactiveUsersSnapshot.size;
  }

  // Récupérer la liste des rôles
  async getRolesList(): Promise<Role[]> {
    const rolesSnapshot = await getDocs(collection(getFirestore(), 'roles'));
    const rolesList: Role[] = [];

    rolesSnapshot.forEach((roleDoc) =>  {
      const roleData = roleDoc.data();
      const role: Role = {
        id: roleDoc.id,
        name: roleData['name'],
        permissions: roleData['permissions'],
        // Ajoutez d'autres propriétés selon les besoins
      };

      rolesList.push(role);
    });

    return rolesList;
  }

  // Suspendre un utilisateur

async suspendUser(userId: string): Promise<void> {
  await updateDoc(doc(getFirestore(), 'users', userId), { status: 'inactive' });
}

 // Supprimer un utilisateur
 async deleteUser(userId: string): Promise<void> {
  await deleteDoc(doc(getFirestore(), 'users', userId));
}

// Modifier les autorisations d'un utilisateur
async updateUserPermissions(userId: string, permissions: string[]): Promise<void> {
  await updateDoc(doc(getFirestore(), 'users', userId), { permissions });
}

  // Attribuer un rôle à un utilisateur
  async assignUserRole(uid: string, roleId: string): Promise<void> {
    // Mettez en œuvre la logique pour attribuer un rôle à un utilisateur dans Firestore
    // par exemple, en mettant à jour le champ 'role' dans le document utilisateur
  }

  // Récupérer les autorisations d'un rôle
  async getRolePermissions(roleId: string): Promise<string[]> {
    const roleDoc = await getDoc(doc(getFirestore(), 'roles', roleId));
    const roleData = roleDoc.data();

    return roleData['permissions'] || [];
  }

}
