import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PorteePublicationService {
  private porteeArticleSubject = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) {
    this.getPorteeAritcle();
  }
  getPorteePublication() {
    let url = environment.apiUrl + '/portee/get';
    return this.http.get(url);
  }
  getPorteeAritcle() {
    this.getPorteePublication().subscribe({
      next: (value: any) => {
        value.portee.forEach((element: any) => {
          if (element.titre == 'Public') {
            this.porteeArticleSubject.next(element);
          }
        });
      },
    });
    return this.porteeArticleSubject.asObservable();
  }
}
