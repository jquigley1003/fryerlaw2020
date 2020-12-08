import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffDetailPageRoutingModule } from './staff-detail-routing.module';

import { StaffDetailPage } from './staff-detail.page';
import { MyMenubarModule } from 'src/app/shared/components/my-menubar/my-menubar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffDetailPageRoutingModule,
    MyMenubarModule
  ],
  declarations: [StaffDetailPage]
})
export class StaffDetailPageModule {}
