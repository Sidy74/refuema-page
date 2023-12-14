import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserInfos } from '../../_models/user..models';

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
}
