import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { LoadingService } from 'src/app/core/_services/loading.service';
import { LoginService } from 'src/app/core/_services/login.service';
import { ToastService } from 'src/app/core/_services/toast/toast.service';

@Component({
  selector: 'app-appbar-avatar',
  templateUrl: './appbar-avatar.component.html',
  styleUrls: ['./appbar-avatar.component.css'],
})
export class AppbarAvatarComponent implements OnInit {
  constructor(
    private userAuthService: LoginService,
    private toastService: ToastService,
    private loadingService: LoadingService
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

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
    if (screen.width > 600) {
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
  }
  logout() {
    this.userAuthService.logout();
    this.toastService.openSuccess('Vous êtes deconnecter.', 'X');
    this.loadingService.isLoading.next(false);
  }
}
