import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchasersBorrowersPage } from './purchasers-borrowers.page';

const routes: Routes = [
  {
    path: '',
    component: PurchasersBorrowersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchasersBorrowersPageRoutingModule {}
