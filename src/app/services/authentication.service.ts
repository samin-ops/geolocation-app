import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticated:boolean = false;
  token: any ;
  constructor() {
    //
   }

  //connexion
  login(username: string, password: string){
    if (username =='admin' && password=='1235'){
      this.authenticated = true;
      this.saveToken();
    }else{
      this.authenticated = false;
    }
    return this.authenticated;
  }
// disconnection
  logout(){
    localStorage.removeItem('myToken');
  }

  //How to use localstorage for mp or etc.
  private saveToken(){
    this.token = "qwerty";
    localStorage.setItem("myToken", this.token)
  }

  // Load token
  loadToken(){
    this.token = localStorage.getItem("myToken");
    if(this.token=="qwerty"){
      this.authenticated = true;
    }else{
      this.authenticated= false;
    }
    return this.authenticated;

  }

}
