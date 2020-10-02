import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'heart'
    },
    {
      title: 'Purchasers & Borrowers',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Sellers',
      url: '/home',
      icon: 'cash'
    },
    {
      title: 'Education Center',
      url: '/home',
      icon: 'school'
    },
    {
      title: 'Staff',
      url: '/home',
      icon: 'people'
    },
    {
      title: 'Contact',
      url: '/home',
      icon: 'phone-portrait'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
