import { Injectable } from '@angular/core';
import { UserTokenService } from './user-token.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  isUserAuthService = true;
  constructor(
    private userTokenService: UserTokenService,
    private http: HttpClient
  ) {
    this.isUserAuthService = this.userTokenService.isLogged();
  }
  login(user: FormData): Observable<any> {
    let url = environment.apiUrl + '/login';
    user.forEach((element) => {
      console.log(element);
    });
    return this.http.post(url, user);
  }

  logout() {
    this.userTokenService.cleanTokenInLocalStorage();
  }
}
