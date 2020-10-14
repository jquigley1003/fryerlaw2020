import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchasersBorrowersPageRoutingModule } from './purchasers-borrowers-routing.module';

import { PurchasersBorrowersPage } from './purchasers-borrowers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchasersBorrowersPageRoutingModule
  ],
  declarations: [PurchasersBorrowersPage]
})
export class PurchasersBorrowersPageModule {}
