import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const menuRoutes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {path: 'home',loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)},
      {path: 'location',loadChildren: () => import('../location/location.module').then( m => m.LocationPageModule)},
      {path: 'new-location',loadChildren: () => import('../new-location/new-location.module').then( m => m.NewLocationPageModule)},
      {path: 'location-details',loadChildren: () => import('../location-details/location-details.module').then( m => m.LocationDetailsPageModule)},
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(menuRoutes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
