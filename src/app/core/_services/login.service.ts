import { Injectable } from '@angular/core';
import { UserTokenService } from './user-token.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ShareUserInfosService } from './share-user-infos.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private userTokenService: UserTokenService,
    private http: HttpClient,
    private shareUserInfosService: ShareUserInfosService
  ) {}

  login(user: FormData): any {
    let url = environment.apiUrl + '/login';
    return this.http.post(url, user);
  }

  logout() {
    this.userTokenService.logout();
    this.shareUserInfosService.deleteUserData();
  }
  isLogged(): Observable<boolean> {
    return this.userTokenService.isLogged();
  }
}
