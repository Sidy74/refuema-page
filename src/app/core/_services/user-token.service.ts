import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserTokenService {
  constructor() {}
  saveTokenInLocalStorage(token: string) {
    localStorage.setItem('userToken', token);
  }
  saveTokenInSessionStorage(token: string) {
    sessionStorage.setItem('userToken', token);
  }
}
