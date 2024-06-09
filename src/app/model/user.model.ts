export interface User {
  id: string;
  lastName: string;
  firstName: string;
  email: string;
  phoneNumber: string;
  address: string;
  role: string;
  active: boolean;
  displayName: string;
  password: string;
  permissions: {
    canEdit: boolean;
  };
  // Ajout des champs manquants



}
