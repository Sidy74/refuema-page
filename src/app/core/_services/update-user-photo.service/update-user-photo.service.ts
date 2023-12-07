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
    const headers = { Authorization: 'Bearer my-token' };
    let url = environment.apiUrl + '/update/photo';
    return this.http.post(url, image, { headers });
  }
}
