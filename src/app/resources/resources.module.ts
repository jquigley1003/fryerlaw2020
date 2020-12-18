import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResourcesPageRoutingModule } from './resources-routing.module';

import { ResourcesPage } from './resources.page';
import { MyMenubarModule } from '../shared/components/my-menubar/my-menubar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResourcesPageRoutingModule,
    MyMenubarModule
  ],
  declarations: [ResourcesPage]
})
export class ResourcesPageModule {}
