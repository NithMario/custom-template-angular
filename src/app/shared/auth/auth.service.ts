import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Users } from '../_models/users';
import { UserService } from '../services/_objects/user.service';
import { GlobalVarService } from '../services/global-var.service';

@Injectable({ providedIn: "root"})
export class AuthService { 

  token: string;
  authUser:any;

  constructor(private $userService: UserService) {}

  signupUser(email: string, password: string) {
    //your code for signing up the new user
  }

   login(email: string, password: string) {
    //your code for checking credentials and getting tokens for for signing in user
    return this.$userService.login(email, password);
  }

  logout() {   
    this.token = null;
    this.authUser = null;
  }

  getToken() {    
    return this.token;
  }

  isAuthenticated() {
    // here you can check if user is authenticated or not through his token 
    // return true;
    // let usrInfo:any = JSON.parse(localStorage.getItem(GlobalVarService.KEY_USER_INFO));

    if(localStorage.getItem(GlobalVarService.KEY_USER_INFO)){
      // this.authUser = JSON.parse(localStorage.getItem(GlobalVarService.KEY_USER_INFO));
      this.authUser = localStorage.getItem(GlobalVarService.KEY_USER_INFO);
      console.log('result',this.authUser);
      this.token = this.authUser;
    
    }
    

    return (this.token != null && this.token != "");
  }
}
