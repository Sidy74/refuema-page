import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isAuth!: boolean;
  constructor() {}
  changeState() {
    console.log('Avant => ' + this.isAuth);
    this.isAuth = !this.isAuth;
    console.log('Apres => ' + this.isAuth);
  }
}
