import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PorteePublicationService {
  private porteeArticleSubject = new BehaviorSubject<any>(null);
  private porteeArticleObservable: Observable<any>;

  constructor(private http: HttpClient) {
    this.porteeArticleObservable = this.porteeArticleSubject.asObservable();
    this.fetchPorteeArticle();
  }

  private fetchPorteeArticle() {
    this.getPorteePublication().subscribe({
      next: (value: any) => {
        value.portee.forEach((element: any) => {
          if (element.titre == 'Public') {
            this.porteeArticleSubject.next(element);
          }
        });
      },
    });
  }

  private getPorteePublication(): Observable<any> {
    let url = environment.apiUrl + '/portee/get';
    return this.http.get(url);
  }

  getPorteeAritcle(): Observable<any> {
    return this.porteeArticleObservable;
  }
}
