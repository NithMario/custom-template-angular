import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarService {
    static KEY_USER_INFO: string = 'user_info';

  constructor() { }
}
