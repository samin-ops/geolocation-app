import { Component, OnInit } from '@angular/core';
import { Place } from '../Model/location-file';
import { LocationService } from '../services/location.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  locations: Array<Place> = [];

  constructor(private locationService: LocationService,
    private router: Router,
    private alertCtrl: AlertController
    ) {

  }

  ngOnInit(){
    //
  }

  ionViewWillEnter(){
    this.locationService.getLocation().then(data=>{
      this.locations = data;
    })
  }

  onNewLocation(){
    this.router.navigateByUrl('/menu/new-location');
  }

  async onRemoveLocation(p:Place){
    let alert = await this.alertCtrl.create({
      header:'Confirmation',
      message: 'Etes vous sur de vouloir supprimer ?',
      buttons: [
        {
          text: 'Oui',
          handler: () => {
            this.locationService.removeLocation(p);
          }
        },
        {
          text: 'Non',
          handler: () => {

          }
        }
      ]
    });
    await alert.present();
  }

  onDetail(p:Place){
    this.locationService.currentLocation = p;
    this.router.navigateByUrl('/menu/location-details');

  }



}
