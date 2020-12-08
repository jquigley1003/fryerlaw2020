import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'purchasers-borrowers',
    loadChildren: () => import('./purchasers-borrowers/purchasers-borrowers.module').then( m => m.PurchasersBorrowersPageModule)
  },
  {
    path: 'sellers',
    loadChildren: () => import('./sellers/sellers.module').then( m => m.SellersPageModule)
  },
  {
    path: 'staff',
    loadChildren: () => import('./staff/staff.module').then( m => m.StaffPageModule)
  },
  {
    path: 'staff/:id',
    loadChildren: () => import('./staff/staff-detail/staff-detail.module').then( m => m.StaffDetailPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
