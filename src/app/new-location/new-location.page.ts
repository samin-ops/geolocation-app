import { Component } from '@angular/core';
import { Place } from '../Model/location-file';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationService } from '../services/location.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.page.html',
  styleUrls: ['./new-location.page.scss'],
})
export class NewLocationPage {
  constructor(private router: Router,
    private geolocation:Geolocation,
    private locationService: LocationService,
    private navCtrl: NavController,

    ) {

   }

  onAddLocation(data: Place){
    data.timestamp = new Date().getTime(); // la date
    data.photos=[]; // les photos
    this.geolocation.getCurrentPosition().then(resp=>{ // la geolocalisation
      data.coordinates={
        latitude :resp.coords.latitude,
        longitude:resp.coords.longitude
      }
      this.locationService.addLocation(data) // On enregistre la position
    }).catch(error=>{
      console.log('Error getting location', error);

    })
    this.navCtrl.back() // Une fois enregister, on revient sur la page precedente
  }

  onReturnLocation(){
    this.router.navigateByUrl('/menu/location');
  }



}
