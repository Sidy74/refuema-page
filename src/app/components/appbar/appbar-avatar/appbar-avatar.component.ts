import {
  AfterContentInit,
  Component,
  HostListener,
  ViewChild,
} from '@angular/core';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';
import { ImageService } from 'src/app/core/_services/images/image.service';
import { LoadingService } from 'src/app/core/_services/loading/loading.service';
import { LoginService } from 'src/app/core/_services/login/login.service';
import { ToastService } from 'src/app/core/_services/toast/toast.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { ShareUserInfosService } from 'src/app/core/_services/share-user-infos/share-user-infos.service';

@Component({
    selector: 'app-appbar-avatar',
    templateUrl: './appbar-avatar.component.html',
    styleUrls: ['./appbar-avatar.component.css'],
    standalone: true,
    imports: [
        MatMenuTrigger,
        MatIcon,
        MatMenu,
        MatMenuItem,
        RouterLink,
        RouterLinkActive,
    ],
})
export class AppbarAvatarComponent implements AfterContentInit {
  imageUrl!: string;

  constructor(
    private userAuthService: LoginService,
    private toastService: ToastService,
    private loadingService: LoadingService,
    private shareUserInfosService: ShareUserInfosService,
    private imageService: ImageService
  ) {}
  ngAfterContentInit(): void {
    this.getImage();
  }

  getImage() {
    this.shareUserInfosService.getUserImage().subscribe({
      next: (value) => {
        if (!value) console.log('Image not found ,url is null');
        this.imageUrl = this.imageService.getImageUrl(value);
      },
      error: (err) => console.log(err),
    });
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
