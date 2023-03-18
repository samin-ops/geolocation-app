import { Component} from '@angular/core';
import {  Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  menus = [
    {title: "Home", url: "/menu/home", icon:'home-outline'},
    {title: "Location", url: "/menu/location", icon:'location-outline'},
    {title: "Logout", url: "/logout", icon:'power-outline'},
  ]

  constructor(
    private router: Router,
    private auth: AuthenticationService
    ) {
    //
  }


  onMenuAction(m:{title:string, url:string, icon:string}){
    if(m.url=='/logout'){
      this.auth.logout();
      this.router.navigateByUrl("/login");

    }else{
      this.router.navigateByUrl(m.url);

    }

  }


}
