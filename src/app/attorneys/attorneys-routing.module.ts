import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttorneysPage } from './attorneys.page';

const routes: Routes = [
  {
    path: '',
    component: AttorneysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttorneysPageRoutingModule {}
