import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TypePublicationService {
  private typeArticleSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  getAllTypePublication() {
    let url = environment.apiUrl + '/type_publication/get';
    return this.http.get(url);
  }

  getTypeArticle() {
    this.getAllTypePublication().subscribe({
      next: (value: any) => {
        value.types.forEach((element: any) => {
          if (element.titre == 'Article') {
            this.typeArticleSubject.next(element);
          }
        });
      },
    });

    return this.typeArticleSubject.asObservable();
  }
}
