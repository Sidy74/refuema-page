import { Injectable } from '@angular/core';
import { UserTokenService } from './user-token.service';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  isUserAuthService = true;
  constructor(private userTokenService: UserTokenService) {
    this.isUserAuthService = this.userTokenService.isLogged();
  }
  login() {
    let x= this.userTokenService.saveTokenInLocalStorage('yyyyyy')
    console.log(x);
    

  }
  logout() {
    this.userTokenService.cleanTokenInLocalStorage()
  }
}
