import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor() { }

  login(name, pass): Observable<boolean> {
    return new Observable<boolean>(obs =>{
      obs.next(true)
    })
  }

}
