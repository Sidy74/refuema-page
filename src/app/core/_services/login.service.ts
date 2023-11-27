import { Injectable } from '@angular/core';
import { UserTokenService } from './user-token.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../_models/user..models';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  ErroStatus!: number;

  //Subject & Observable for user Informations change
  private currentUserInfos: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);
  currentUserInfos$: Observable<User | null> =
    this.currentUserInfos.asObservable();

  constructor(
    private userTokenService: UserTokenService,
    private http: HttpClient
  ) {}

  setup(user: User) {
    this.currentUserInfos.next(user);
  }
  login(user: FormData): any {
    let url = environment.apiUrl + '/login';
    let x = this.http.post(url, user);
    x.subscribe({
      next: (value: any) => {
        this.userTokenService.login(value.token);
        this.setup(value.user);
      },
      error: (err: HttpErrorResponse) => {
        this.ErroStatus = err.status;
      },
    });
    return x;
  }

  logout() {
    this.userTokenService.logout();
    this.currentUserInfos.next(null);
  }
  isLogged(): Observable<boolean> {
    return this.userTokenService.isLogged();
  }
}
