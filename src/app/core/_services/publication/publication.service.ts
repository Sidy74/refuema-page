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
  private rencontresSubject = new BehaviorSubject<any>(null);
  private projetsSubject = new BehaviorSubject<any>(null);
  private conferencesSubject = new BehaviorSubject<any>(null);

  addPublication(data: FormData) {
    let url = environment.apiUrl + '/admin/publication';
    return this.http.post(url, data);
  }
  getPublication() {
    let url = environment.apiUrl + '/publication/get';
    return this.http.get(url);
  }
  getArticles() {
    this.getPublication().subscribe({
      next: (value: any) => {
        var x: Array<any> = [];
        value.publication.forEach((element: any) => {
          if ((element.type = 'Articles')) {
            x.push(element);
          }
        });
        this.articlesSubject.next(x);
      },
    });
    return this.articlesSubject.asObservable();
  }
  getProjets() {
    this.getPublication().subscribe({
      next: (value: any) => {
        var x: Array<any> = [];
        value.publication.forEach((element: any) => {
          if ((element.type = 'Projet')) {
            x.push(element);
          }
        });
        this.projetsSubject.next(x);
      },
    });
    return this.projetsSubject.asObservable();
  }
  getConferences() {
    this.getPublication().subscribe({
      next: (value: any) => {
        var x: Array<any> = [];
        value.publication.forEach((element: any) => {
          if ((element.type = 'Conference')) {
            x.push(element);
          }
        });
        this.conferencesSubject.next(x);
      },
    });
    return this.conferencesSubject.asObservable();
  }
  getRencontres() {
    this.getPublication().subscribe({
      next: (value: any) => {
        var x: Array<any> = [];
        value.publication.forEach((element: any) => {
          if ((element.type = 'Rencontre')) {
            x.push(element);
          }
        });
        this.rencontresSubject.next(x);
      },
    });
    return this.rencontresSubject.asObservable();
  }
}
