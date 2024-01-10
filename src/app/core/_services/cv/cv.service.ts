import { formatDate } from '@angular/common';
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
  addCV(cvData: FormData) {
    console.log('IN ADD CV SERVICE THE DATA');
    cvData.forEach((element) => {
      console.log(element);
    });
    let url = environment.apiUrl + '/add/cv';
    return this.http.post(url, cvData);
  }
  updateCV(id: number, formatDate: FormData) {
    let url = `${environment.apiUrl}/update/cv/${id}`;
    console.log('url :' + url);
    return this.http.post(url, formatDate);
  }
}
