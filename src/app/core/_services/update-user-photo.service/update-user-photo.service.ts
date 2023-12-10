import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateUserPhotoService {
  constructor(private http: HttpClient) {}

  updatePhoto(image: FormData): Observable<any> {
    let url = environment.apiUrl + '/update/photo';
    image.forEach((element) => {
      console.log(element);
    });

    return this.http.post(url, image);
  }
}
