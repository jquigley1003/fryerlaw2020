import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefinancingPage } from './refinancing.page';

const routes: Routes = [
  {
    path: '',
    component: RefinancingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefinancingPageRoutingModule {}
