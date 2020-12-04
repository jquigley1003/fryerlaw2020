import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ScreensizeService } from '../../services/screensize.service';

@Component({
  selector: 'app-my-menubar',
  templateUrl: './my-menubar.component.html',
  styleUrls: ['./my-menubar.component.scss'],
})
export class MyMenubarComponent implements OnInit {
  isDesktop: boolean;

  constructor(
    private router: Router,
    private screensizeService: ScreensizeService) {
      this.screensizeService.isDesktopView().subscribe(isDesktop => {
        if(this.isDesktop && !isDesktop) {
          // Reload because our routing is out of place
          window.location.reload();
        }
        this.isDesktop = isDesktop;
      })
     }

  ngOnInit() {}

  goHome() {
    this.router.navigate(['/']);
  }

  goToBuying() {
    this.router.navigate(['/purchasers-borrowers']);
  }

  goToSelling() {
    this.router.navigate(['/sellers'])
  }

  goToAttorneys() {
    this.router.navigate(['/attorneys'])
  }
}
