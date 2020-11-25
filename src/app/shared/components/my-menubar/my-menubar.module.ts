import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { MyMenubarComponent } from './my-menubar.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [
    MyMenubarComponent
  ],
  exports: [
    MyMenubarComponent
  ]
})
export class MyMenubarModule { }