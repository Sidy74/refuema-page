import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  updatePhoto(image: FormData): Observable<any> {
    let url = environment.apiUrl + '/update/photo';
    image.forEach((element) => {
      console.log(element);
    });
    return this.http.post(url, image);
  }
}
