import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from "app/shared/auth/auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor{
    constructor(private authService: AuthService){}

    intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent <any>>{
        // add auth header with jwt token if available
        if(this.authService.isAuthenticated()){
            let currentUsr = this.authService.authUser;
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUsr}`
                }
            });
        }

        //all content type
        request = request.clone({setHeaders: {"Content-Type": "application/json"}});
        request = request.clone({setHeaders: {"Accept": "application/json"}});
 
        return next.handle(request);
    }
}
