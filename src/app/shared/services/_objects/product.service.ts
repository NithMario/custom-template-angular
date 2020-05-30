import { Injectable } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends RestApiService {
  URL_PATH: string = "/product";

 
}
