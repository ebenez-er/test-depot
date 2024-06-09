import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secretary',
  templateUrl: './secretary.page.html',
  styleUrls: ['./secretary.page.scss'],
})
export class SecretaryPage implements OnInit {

  pendingTasksCount: number = 0;
  unreadMessagesCount: number = 0;
  showDocumentSubMenu: boolean = false;

  constructor() {}

  toggleDocumentSubMenu() {
    this.showDocumentSubMenu = !this.showDocumentSubMenu;
  }

  ngOnInit() {
    // Initialisez ici les données du tableau de bord en appelant les méthodes appropriées pour récupérer les données
    this.fetchPendingTasksCount();
    this.fetchUnreadMessagesCount();
  }

  // Méthode pour récupérer le nombre de tâches en attente
  fetchPendingTasksCount() {
    // Code pour récupérer le nombre de tâches en attente depuis le service approprié
    // Par exemple :
    // this.taskService.getPendingTasksCount().subscribe(count => this.pendingTasksCount = count);
  }

  // Méthode pour récupérer le nombre de messages non lus
  fetchUnreadMessagesCount() {
    // Code pour récupérer le nombre de messages non lus depuis le service approprié
    // Par exemple :
    // this.messageService.getUnreadMessagesCount().subscribe(count => this.unreadMessagesCount = count);
  }
}
