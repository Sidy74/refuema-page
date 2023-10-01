import { Component, HostListener, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { LoginService } from '../../../core/services/login.service';

@Component({
  selector: 'app-appbar-avatar',
  templateUrl: './appbar-avatar.component.html',
  styleUrls: ['./appbar-avatar.component.css'],
})
export class AppbarAvatarComponent {
  constructor(private loginService: LoginService) {}

  @ViewChild(MatMenuTrigger)
  trigger!: MatMenuTrigger;
  openMyMenu() {
    this.trigger.openMenu();
  }
  closeMyMenu() {
    this.trigger.closeMenu();
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.closeMyMenu();
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById('image-container')!.style.height = '40px';
      document.getElementById('image-container')!.style.width = '40px';
      document.getElementById('profil-image')!.style.width = '40px';
      document.getElementById('profil-image')!.style.height = '40px';
    } else {
      document.getElementById('image-container')!.style.height = '50px';
      document.getElementById('image-container')!.style.width = '50px';
      document.getElementById('profil-image')!.style.width = '50px';
      document.getElementById('profil-image')!.style.height = '50px';
    }
  }
  logout() {
    this.loginService.changeState();
  }
}
