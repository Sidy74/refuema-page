import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TypePublicationService {
  private typeArticleSubject = new BehaviorSubject<any>(null);
  private typeArticleObservable: Observable<any>;

  constructor(private http: HttpClient) {
    this.typeArticleObservable = this.typeArticleSubject.asObservable();
    this.fetchTypeArticle();
  }

  private fetchTypeArticle() {
    this.getAllTypePublication().subscribe({
      next: (value: any) => {
        value.types.forEach((element: any) => {
          if (element.titre == 'Article') {
            this.typeArticleSubject.next(element);
          }
        });
      },
    });
  }

  private getAllTypePublication(): Observable<any> {
    let url = environment.apiUrl + '/type_publication/get';
    return this.http.get(url);
  }

  getTypeArticle(): Observable<any> {
    return this.typeArticleObservable;
  }
}
