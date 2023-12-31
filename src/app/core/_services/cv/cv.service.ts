import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  constructor(private http: HttpClient) {}
  getCV() {
    let url = environment.apiUrl + '/cv/get';
    return this.http.get(url);
  }
}
