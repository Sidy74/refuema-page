import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserTokenService {
  constructor() {}
  saveTokenInLocalStorage(token: string): void {
    localStorage.setItem('userToken', token);
    return;
  }
  saveTokenInSessionStorage(token: string): void {
    sessionStorage.setItem('userToken', token);
    return;
  }
  cleanTokenInLocalStorage(): void {
    localStorage.removeItem('userToken');
    return;
  }
  isLogged(): boolean {
    const token = localStorage.getItem('userToken');
    return !!token;
  }
}
