import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellersPageRoutingModule } from './sellers-routing.module';

import { SellersPage } from './sellers.page';
import { MyMenubarModule } from '../shared/components/my-menubar/my-menubar.module';
import { SeeInfoModalModule } from '../shared/modals/see-info-modal/see-info-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellersPageRoutingModule,
    MyMenubarModule,
    SeeInfoModalModule
  ],
  declarations: [SellersPage]
})
export class SellersPageModule {}
