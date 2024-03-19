import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PublicationService {
  constructor(private http: HttpClient) {}

  private articlesSubject = new BehaviorSubject<any>(null);

  addPublication(data: FormData) {
    let url = environment.apiUrl + '/admin/publication';
    return this.http.post(url, data);
  }
  deletePublication(id: number) {
    let url = environment.apiUrl + `/admin/publication/delete/${id}`;
    return this.http.post(url, null);
  }
  getAllPublicationPublic() {
    let url = environment.apiUrl + '/admin/publication/get';
    return this.http.get(url);
  }
  getAllPublicationPrivee() {
    let url = environment.apiUrl + '/admin/publication/private/get';
    return this.http.get(url);
  }
  getAllPublicationNotAccepted() {
    let url = environment.apiUrl + '/admin/publication/no_send/get';
    return this.http.get(url);
  }
  // getArticles() {
  //   this.getAllPublication().subscribe({
  //     next: (value: any) => {
  //       var x: Array<any> = [];
  //       value.publication.forEach((element: any) => {
  //         if ((element.type = 'Articles')) {
  //           x.push(element);
  //         }
  //       });
  //       this.articlesSubject.next(x);
  //     },
  //   });
  //   return this.articlesSubject.asObservable();
  // }

  updatePublication(arg0: FormData) {
    let url = environment.apiUrl + `/admin/i/m/not/found`;
    return this.http.post(url, arg0);
  }
}
