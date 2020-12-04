import { Component, HostListener } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { ScreensizeService } from './shared/services/screensize.service';

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
      icon: 'home'
    },
    {
      title: 'Buying',
      url: '/purchasers-borrowers',
      icon: 'wallet'
    },
    {
      title: 'Selling',
      url: '/sellers',
      icon: 'cash'
    },
    {
      title: 'Refinancing',
      url: '/home',
      icon: 'star'
    },
    {
      title: 'About',
      url: '/home',
      icon: 'book'
    },
    {
      title: 'Attorneys',
      url: '/home',
      icon: 'people'
    },
    {
      title: 'Resources',
      url: '/home',
      icon: 'school'
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
    private statusBar: StatusBar,
    private screensizeService: ScreensizeService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.screensizeService.onResize(this.platform.width());
    });
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    this.screensizeService.onResize(event.target.innerWidth);
  }
}
