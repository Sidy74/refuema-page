import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}
  generateCard() {
    let url = environment.apiUrl + '/generate/card';
    return this.http.post(url, null);
  }
  getCard() {
    let url = environment.apiUrl + '/card/get';
    return this.http.get(url);
  }
}
