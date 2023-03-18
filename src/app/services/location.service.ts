import { Injectable } from '@angular/core';
import { Place } from '../Model/location-file';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  public locations: Array<Place> = [];
  private _storage: Storage | null = null;
  public currentLocation: Place | any;

  constructor(private storage: Storage)
  {
    this.init();
  }
  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  getLocation(){
    return this.storage.get('locations').then(data=>{
      this.locations = data!=null?data:[];
      return this.locations.slice();
    });
  }

 addLocation(place:Place){
    this.locations.push(place);
    this.updateLocations();
  }

  updateLocations(){
   this._storage?.set("locations", this.locations);
  }

  removeLocation(p: Place){
    let index = this.locations.indexOf(p);
    this.locations.splice(index,1);
    this.updateLocations();
  }

}
