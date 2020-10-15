import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { SeeInfoModalComponent } from './see-info-modal.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [
    SeeInfoModalComponent
  ]
})
export class SeeInfoModalModule { }