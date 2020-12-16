import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefinancingPageRoutingModule } from './refinancing-routing.module';

import { RefinancingPage } from './refinancing.page';
import { MyMenubarModule } from '../shared/components/my-menubar/my-menubar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefinancingPageRoutingModule,
    MyMenubarModule
  ],
  declarations: [RefinancingPage]
})
export class RefinancingPageModule {}
