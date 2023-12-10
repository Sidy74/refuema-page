import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}
  getImage(image: string) {
    let url = environment.imageUrl + image;
    return this.http.get(url);
  }
  getImageUrl(image: string) {
    return environment.imageUrl + image;
  }
}
