import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}
  getImageUrl(image: string | null) {
    let url =
      'https://c0.klipartz.com/pngpicture/613/636/gratis-png-iconos-de-la-computadora-perfil-de-usuario-avatar-masculino-avatar-thumbnail.png';
    if (image === 'null' || image === 'undefined') {
      url =
        'https://c0.klipartz.com/pngpicture/613/636/gratis-png-iconos-de-la-computadora-perfil-de-usuario-avatar-masculino-avatar-thumbnail.png';
    } else if (image) {
      image = image.replace(/"/g, '');
      url = `${environment.imageUrl}${encodeURIComponent(image)}`;
    }

    return url;
  }
}
