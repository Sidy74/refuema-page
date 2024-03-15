import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private http: HttpClient) {}
  registre(newUser: FormData): Observable<any> {
    newUser.forEach((element) => {
      console.log(element);
    });
    const url = environment.apiUrl + '/register';
    return this.http.post(url, newUser);
  }

  getTitre(): Observable<any> {
    const url = environment.apiUrl + '/titre';
    return this.http.get(url);
  }
  getTypeDocument(): Observable<any> {
    const url = environment.apiUrl + '/type_documnent';
    return this.http.get(url);
  }
}
