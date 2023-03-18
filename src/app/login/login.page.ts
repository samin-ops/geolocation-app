import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

  constructor(private authservise: AuthenticationService, private router: Router) {
    //
  }



  onLogin(user:any){
    let res = this.authservise.login(user.username, user.password)
    if(!res){
      this.router.navigateByUrl('/login');
    }else{
      this.router.navigateByUrl('/menu/home');
    }
  }
}
