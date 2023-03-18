import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { Place } from '../Model/location-file';
import { Router } from '@angular/router';
// camera
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.page.html',
  styleUrls: ['./location-details.page.scss'],
})
export class LocationDetailsPage implements OnInit {
  public currentPlace :Place | any ;

  constructor(
    private locationService:LocationService,
    private router: Router,
    private camera: Camera,
    private alertCtrl: AlertController
    ) {
    //
   }

  ngOnInit() {
    this.currentPlace = this.locationService.currentLocation
  }

  goBack(){
    this.router.navigateByUrl('/menu/location');
  }

  async onTakePicture(){
    const option1: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,// la photo avec l'appreil photo
      allowEdit: true
    }
    const option2: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY, // dans la galerie de l'appareil
      allowEdit: true
    }

    let alert= await this.alertCtrl.create({
      header:'Choix de la camera',
      message:'Source ?',
      buttons:[
        {
          text:'Camera',
          handler:()=>{
            this.getPicture(option1);
          }
        },
        {
          text:'Labrary',
          handler:()=>{
            this.getPicture(option2);
          }
        }
      ]

    });
    await alert.present();
  }

  getPicture(option:CameraOptions){
    this.camera.getPicture(option)
    .then(data=>{
      let base64Image = 'data:image/jpeg;base64,' + data; // convertir la photo en format texte.
      this.currentPlace.photos.push(base64Image);

    }, (err)=>{
      console.log(err);
    })
  }

}
