import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-profil-avatar',
  templateUrl: './profil-avatar.component.html',
  styleUrls: ['./profil-avatar.component.css'],
})
export class ProfilAvatarComponent {
  @Input() imageUrl: string =
    'https://c0.klipartz.com/pngpicture/613/636/gratis-png-iconos-de-la-computadora-perfil-de-usuario-avatar-masculino-avatar-thumbnail.png';

  @Output() imageUrlEvent = new EventEmitter<string>();

  updateImage() {
    this.imageUrlEvent.emit();
  }
}
