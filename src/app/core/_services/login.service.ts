import { Injectable } from '@angular/core';
import { UserTokenService } from './user-token.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, UserInfos } from '../_models/user..models';
import { ShareUserInfosService } from './share-user-infos.service';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  
  constructor(
    private userTokenService: UserTokenService,
    private http: HttpClient,
    private loadingService:LoadingService ,
    private shareUserInfosService: ShareUserInfosService
  ) {}

  login(user: FormData): any {
    let url = environment.apiUrl + '/login';
    let x = this.http.post(url, user);
    x.subscribe({
      next: (value: any) => {
        //Loading false requêt is completed 
        this.loadingService.isLoading.next(false)

        this.userTokenService.login(value.token);
        if (value.user) {
          this.shareUserInfosService.setUserData(
            new UserInfos(
              value.user.prenom,
              value.user.nom,
              value.user.email,
              value.user.telephone,
              value.user.photo
            )
          );
        }
      },
      error: (err: HttpErrorResponse) => {
       
        //Loading false requêt is completed 
        this.loadingService.isLoading.next(false)
      },
    });
    return x;
  }

  logout() {
    this.userTokenService.logout();
    this.shareUserInfosService.deleteUserData();
  }
  isLogged(): Observable<boolean> {
    return this.userTokenService.isLogged();
  }
}
