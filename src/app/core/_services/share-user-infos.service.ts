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

  //Subject & Observable for user photo change
  private currentUserPhoto: BehaviorSubject<string | null> =
    new BehaviorSubject<string | null>(null);
  currentUserPhoto$: Observable<string | null> =
    this.currentUserPhoto.asObservable();
  userPhotoKey: string = '%usr%photo';

  constructor() {}
  setUserData(user: User) {
    if (user) {
      this.currentUserInfos.next(user);
      localStorage.setItem(this.userInfosKey, JSON.stringify(user));
      localStorage.setItem(this.userPhotoKey, JSON.stringify(user.photo));
    }
  }
  setUserPhoto(image: string) {
    localStorage.setItem(this.userPhotoKey, image);
  }
  deleteUserData() {
    this.currentUserInfos.next(null);
    localStorage.removeItem(this.userInfosKey);
  }
  getUserImage(): Observable<string | null> {
    let photoString = localStorage.getItem(this.userPhotoKey);
    if (!!photoString) {
      this.currentUserPhoto.next(photoString);
    }
    return this.currentUserPhoto$;
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
