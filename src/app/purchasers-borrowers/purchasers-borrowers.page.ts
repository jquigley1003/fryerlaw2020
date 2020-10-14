import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchasers-borrowers',
  templateUrl: './purchasers-borrowers.page.html',
  styleUrls: ['./purchasers-borrowers.page.scss'],
})
export class PurchasersBorrowersPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['/']);
  }

}
