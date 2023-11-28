import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {}
  registre(newUser: FormData): Observable<any> {
    const url = environment.apiUrl + '/register';
    const x = this.http.post(url, newUser);
    x.subscribe({
      next: (value) => {
        //Loading false requêt is completed
        this.loadingService.isLoading.next(false);
      },
      error: (err) => {
        //Loading false requêt is completed
        this.loadingService.isLoading.next(false);
        console.log(err);
      },
    });
    return x;
  }

  getTitre(): Observable<any> {
    const url = environment.apiUrl + '/titre';
    const x = this.http.get(url);
    x.subscribe((val) => {
      //Loading false requêt is completed
      this.loadingService.isLoading.next(false);
    });
    return x;
  }
  getTypeDocument(): Observable<any> {
    const url = environment.apiUrl + '/type_documnent';
    const x = this.http.get(url);
    x.subscribe((val) => {
      //Loading false requêt is completed
      this.loadingService.isLoading.next(false);
    });

    return x;
  }
}
