import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
   
  constructor(private http: HttpClient) {}

  updateInformations(user: FormData) {
    let url = environment.apiUrl + '/user/update';
    return this.http.post(url, user);
  }

  updatePhoto(image: FormData): Observable<any> {
    let url = environment.apiUrl + '/update/photo';
    return this.http.post(url, image);
  }
  resteAuthenticatedUserPassword(passwords: FormData) {
    let url = environment.apiUrl + '/user/password_reset';
    return this.http.post(url, passwords);
  }

  resetPassword(email: FormData) {
    email.forEach(element => {
      console.log(element);
      
    });
    let url = environment.apiUrl + '/reset-password';
    return this.http.post(url, email);
  }
}
