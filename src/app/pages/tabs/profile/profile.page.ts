import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chatbubbleOutline, heartOutline, logOutOutline, notificationsOutline, optionsOutline, personOutline} from 'ionicons/icons'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],

})
export class ProfilePage implements OnInit {
options : any[] =[];
  constructor() {
    addIcons({
personOutline,
optionsOutline,
notificationsOutline,
logOutOutline,
chatbubbleOutline,heartOutline

    });
  }

  ngOnInit() {
    console.log('profile ngoninit');
    this.options = [
      {title : 'Profile' , icon: 'person-outline', color : 'primary'},
      {title : 'Chat' , icon: 'chatbubbles-outline', color : 'primary'},
      {title : 'Wishlist' , icon: 'heart-outline', color : 'primary'},
      {title : 'Settings' , icon: 'options-outline', color : 'primary'},
      {title : 'Notifications' , icon: 'notifications-outline', color : 'primary'},
      {title : 'Logout' , icon: 'log-out-outline', color : 'secondary' , background: 'primary'},

    ];
  }
  getRows() {
    const rows =[];
    for (let i =0; i<this.options.length; i+=3){
      rows.push(this.options.slice(i, i+3));
    }
    return rows;
  }
}
