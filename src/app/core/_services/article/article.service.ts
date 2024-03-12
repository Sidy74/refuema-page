import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}
  getAllArticle() {
    let url = environment.apiUrl + '/article/get';
    return this.http.get(url);
  }
  deteleArticle(id: number) {
    let url = environment.apiUrl + `/admin/publication/delete/${id}`;
    this.http.post(url,null).subscribe({});
    console.log(url);
  }
  addArtilce(data: any): Observable<any> {
    data.forEach((element: any) => {
      console.log(element);
    });

    let url = environment.apiUrl + '/admin/publication';
    return this.http.post(url, data);
  }
}
