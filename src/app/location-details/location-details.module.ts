import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LocationDetailsPageRoutingModule } from './location-details-routing.module';
import { LocationDetailsPage } from './location-details.page';
//agm - google maps
//import { AgmCoreModule } from '@agm/core';


@NgModule({
  imports: [
    CommonModule,
   // AgmCoreModule.forRoot({
    //apiKey: 'AlzaSyC8edYmdVQLbhHf3crT_tqBMXNfnELJXs',
   // }),
    FormsModule,
    IonicModule,
    LocationDetailsPageRoutingModule
  ],
  declarations: [LocationDetailsPage]
})
export class LocationDetailsPageModule {}
