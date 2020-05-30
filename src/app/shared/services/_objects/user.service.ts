import { Injectable } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends RestApiService{
  
  URL_PATH:string = "/users";
  
  login(username, password){
    let credential:any = {
      username: username,
      password: password
    }; 
    // return {"id": "001",
    //         "api_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZjkzNWE2NzcyZWMzZWM1MDgzNDM5ZTFkMzA3NGM2YjQyMTJmYzE4MjQ4OWMyZDM0NzNiN2YwNmNhOTljNDVmYjQyYjA2MDM4MTQ0NWUwYTQiLCJpYXQiOjE1NzkyNzI0NjcsIm5iZiI6MTU3OTI3MjQ2NywiZXhwIjoxNjEwODk0ODY3LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.MKqOZHWdBsGCMROzoSLfu7JaRi4pXvhMGBuGOage1o1HucM-QAM2IwBLnJsvrBQnyeWooUDpgWJyk3DJh_BssN9Mq2Dr_tvkajjoMkXxFhDIKzTK5TYabOI_8cCWeXZexbRBA60O_PP7uE_HImTtrxauR8uPBFxVU0HBDIJNh-placmZ990_q8pag3cObfg3uXl3IxgTSWdOkH2DQzGnmbjjeaU-48pvEBeNA6uhhuBVHzvOFCiOvpvAl45EiLN0lS01IAyMVEsW0ycuB-wOI02R_zJvyd1RsYi65ucVGLdCzNGWOfJEwK9IuQkwIAwnC19aIiyRZn-hUmGnQXKZlXyqQ1cU7IYa-CDdSUzKMVlVdpdLp5YLMMPdK9eaG4lxvek4R6oXh-gaXCl2oYq81V8qlErBIKXUnYUMISjT7BvO_YUIIDGegTt5eimpQG_PJGlCs16uQ3pN9d2v8FUY7wlOriXU7Txc14LTOlR4a5LWv4xZSCeXR-YgLqpW1WaeLFeik1ZshUJWhDR9E5yGPWcJhwIahvgLQIyJMDLOZRq3RO9tWG3eT9a87C2-rp27-3Fu-6-9iBTKwKidwfEZ5xyAC_86fzNbsyF2GJorP7PiE4ncwjG4ETkrHrJSDO9ZyMWBXhP6AkC92K1H97PkpSf7FiBwGff927vkLZcFWR8"};

    return this.postByPath("/login", credential); 
  }

  logout() {
    localStorage.removeItem('user_info');
    //TODO: logout user from DB
    //TODO: Clear all local storage data, except config data
    //TODO: redirect to home page demo
  }
}
