import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse,HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { isNull } from 'util';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const httpOptionsNoAuth = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const API_EP = "http://127.0.0.1:8000/api";
const EP = "http://127.0.0.1:8000";

@Injectable({
  providedIn: 'root'
})
export abstract class RestApiService { 
  abstract URL_PATH:string = "";

  constructor(private $http: HttpClient) {}

  /**
   * HTTP request GET
   * @param url_path string url path for request
   * @param filter json object with params to filter
   * @param isAuth default true, if the request need to set auth
   */
  get(filter:Object): Observable<any> {
    return this.$http.get<any[]>(API_EP + this.URL_PATH);
  }  

  getByPath(path:string, filter:Object): Observable<any>{
    let options = {};

    if(filter && !isNull(filter)){
      let params:HttpParams = new HttpParams();
      for (const key in filter) { 
        if (filter.hasOwnProperty(key)) {
          const element = filter[key];
          params = params.set(key, element);
        }
      }  
      options['params'] = params;
    }

    return this.$http.get<any>(API_EP + path, options);
  }
  post(lstObjs:any): Observable<any>{ 
    return this.$http.post(API_EP+ this.URL_PATH, lstObjs, httpOptions);
  }
  postByPath(path:string, lstObjs:any): Observable<any>{ 
    return this.$http.post(API_EP+path, lstObjs, httpOptions);
  } 

  put (lstObjs:any[]): Observable<any>{ 
    return this.$http.put(API_EP+this.URL_PATH, lstObjs, httpOptions);
  }

  putByPath (path:string, lstObjs:any[]): Observable<any>{ 
    return this.$http.put(API_EP+path, lstObjs, httpOptions);
  }
  // delete(filter:Object): Observable<any> {
  //   return this.$http.delete<any[]>(API_EP + this.URL_PATH);
  // }  

  // deleteByPath(path:string, filter:Object): Observable<any>{
  //   return this.$http.delete<any>(API_EP + path);
  // }
  delete(lead) {
  return this.$http.delete('http://127.0.0.1:8000/api/deletelead/'+lead);

}

// deleteByPath(path) {
//   return this.$http.delete('http://127.0.0.1:8000/api/deletecompany/'+path);

// }

deleteByPath(path){
   return this.$http.delete(API_EP+path);

}



  

  

}
