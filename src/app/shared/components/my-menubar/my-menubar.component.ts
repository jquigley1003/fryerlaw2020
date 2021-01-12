import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { ScreensizeService } from '../../services/screensize.service';

@Component({
  selector: 'app-my-menubar',
  templateUrl: './my-menubar.component.html',
  styleUrls: ['./my-menubar.component.scss'],
})
export class MyMenubarComponent implements OnInit, OnDestroy {
  isDesktop: boolean;
  screensizeSub: Subscription;


  constructor(
    private router: Router,
    private navCtrl: NavController,
    private screensizeService: ScreensizeService) {
      this.screensizeSub = this.screensizeService.isDesktopView().subscribe(isDesktop => {
        if(this.isDesktop && !isDesktop) {
          // Reload because our routing is out of place
          window.location.reload();
        }
        this.isDesktop = isDesktop;
      })
     }

  ngOnInit() {}

  goHome() {
    // this.router.navigate(['/']);
    this.navCtrl.navigateBack('/');
  }

  goToBuying() {
    this.navCtrl.navigateForward('/purchasers-borrowers');
  }

  goToSelling() {
    this.navCtrl.navigateForward('/sellers');
  }

  goToRefinancing() {
    this.navCtrl.navigateForward('/refinancing');
  }

  goToAbout() {
    this.navCtrl.navigateForward('/about');
  }

  goToAttorneys() {
    this.navCtrl.navigateForward('/staff');
  }

  goToResources() {
    this.navCtrl.navigateForward('/resources');
  }

  goToContact() {
    this.navCtrl.navigateForward('/contact');
  }

  ngOnDestroy() {
    this.screensizeSub.unsubscribe();
  }
}
