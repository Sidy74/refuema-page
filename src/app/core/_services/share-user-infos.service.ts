import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, UserInfos } from '../_models/user..models';

@Injectable({
  providedIn: 'root',
})
export class ShareUserInfosService {
  //Subject & Observable for user Informations change
  private currentUserInfos: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);
  currentUserInfos$: Observable<User | null> =
    this.currentUserInfos.asObservable();
  userInfosKey: string = 'usr';
  constructor() {}
  setUserData(user: User) {
    if (user) {
      this.currentUserInfos.next(user);
      localStorage.setItem(this.userInfosKey, JSON.stringify(user));
    }
  }
  deleteUserData() {
    this.currentUserInfos.next(null);
    localStorage.removeItem(this.userInfosKey);
  }
  getUserData(): Observable<User | null> {
    let userString = localStorage.getItem(this.userInfosKey);
    if (!!userString) {
      const x = JSON.parse(userString) as UserInfos;
      this.currentUserInfos.next(x);
    }

    return this.currentUserInfos$;
  }
}
