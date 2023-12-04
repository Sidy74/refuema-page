import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserTokenService {
  userTokenKey: string = 'userToken';
  //Subject & Observable for user (token)change
  private currentUser: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    this.hasToken()
  );
  currentUser$: Observable<boolean> = this.currentUser.asObservable();

  constructor() {}
  saveTokenInLocalStorage(token: string): void {
    localStorage.setItem(this.userTokenKey, token);
    return;
  }
  getTokenInLocalStorage(): string | null {
    const token = localStorage.getItem(this.userTokenKey);
    if (token) return token;
    return null;
  }

  cleanTokenInLocalStorage(): void {
    localStorage.removeItem(this.userTokenKey);
    return;
  }
  login(token: string): void {
    this.saveTokenInLocalStorage(token);
    this.currentUser.next(true);
    return;
  }

  logout() {
    let token = localStorage.getItem(this.userTokenKey);
    if (token) {
      this.cleanTokenInLocalStorage();
      this.currentUser.next(false);
    }
  }
  hasToken(): boolean {
    return !!localStorage.getItem(this.userTokenKey);
  }

  isLogged(): Observable<boolean> {
    return this.currentUser$;
  }
}
