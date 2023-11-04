import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private http: HttpClient) {}
  registre(newUser: any): Observable<any> {
    let url = environment.apiUrl + '/register';
    console.log(environment.apiUrl);
    return this.http.post(url, newUser);
  }
}
