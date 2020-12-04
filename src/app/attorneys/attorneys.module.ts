import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttorneysPageRoutingModule } from './attorneys-routing.module';

import { AttorneysPage } from './attorneys.page';
import { MyMenubarModule } from '../shared/components/my-menubar/my-menubar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttorneysPageRoutingModule,
    MyMenubarModule
  ],
  declarations: [AttorneysPage]
})
export class AttorneysPageModule {}
