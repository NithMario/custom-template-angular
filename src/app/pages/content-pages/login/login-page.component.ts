import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "app/shared/auth/auth.service";
import { GlobalVarService } from 'app/shared/services/global-var.service';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {
    user = {
        email: "",
        password: "",
        token:''
    };
    thisFrm = {
        hasError: false
    };
    title = "login";
    comments = "Welcome back, please login to your account."
    show: boolean = true;
    a: string = null;

    @ViewChild('f') loginForm: NgForm;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private $authService: AuthService,
                private http:HttpClient
                
                
                ) 
    { 

    }

    resolved(captchaResponse: string) {
        console.log(`Resolved captcha with response: ${captchaResponse}`);
    }

    // On submit button click
    onSubmit() {
        this.loginForm.reset();
    }
    // On Forgot password link click
    onForgotPassword() {
        this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
    }
    // On registration link click
    onRegister() {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    }
    onLogin() {
  

        //TODO: Callout to get real data
      
                        // this line use to login 
                        // I think this line not work too then
                      this.http.post('http://localhost:8000/api/login',this.user).subscribe(res=>{
                          
                      // we can write like javascript also we can use let or var for declare variable is optional
                      //ok
                      this.user.token = res[0];
                      let mockUser = '{'+
                      '"user": "qqq",'+
                                          '"id": "0001",'+
                                          '"username": "Tester",'+
                                          '"api_token": '+this.user.token+','+
                                          '"email": "tester@test.com",'+
                                          '"phone": "0123456789",'+
                                          '"available_apps": ['+
                                              '{'+
                                                  '"name": "pos sale",'+
                                                  '"route": ""'+
                                              '}'+
                                          '],'+
                                          '"permission": {'+
                                              '"routers": ['+
                                                  '{'+
                                                      '"name": "router label",'+
                                                      '"icon": "",'+
                                                      '"route_to": ""'+
                                                  '}'+
                                              ']'+
                                          '}'+    
                                      '}';
                                    //   this.$authService.authUser = res.data;
                                              this.$authService.token = res[0];
                      localStorage.setItem(GlobalVarService.KEY_USER_INFO, this.user.token);
                          
                          this.$authService.authUser = mockUser;
                      })
                            // this.$authService.authUser = res.data;
                            // this.$authService.token = res.data.api_token;
                           
        // localStorage.setItem(GlobalVarService.KEY_USER_INFO, mockUser);
        this.router.navigate(['']);
        return;
        // this.$authService.login(this.user.username, this.user.password)
        //     .subscribe(res => {
        //         console.log("res user", res);
        //         this.$authService.authUser = res.data;
        //         this.$authService.token = res.data.api_token;
        //         this.router.navigate(['admin']);
        //     },
        //     err => {
        //         console.log("err", err);
        //         this.title = "error";
        //         this.comments = err.message;
        //         this.thisFrm.hasError = true;
        //     });

    }
//Login Function

  
}