import { AfterContentInit, Component } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ImageService } from 'src/app/core/_services/images/image.service';
import { LoadingService } from 'src/app/core/_services/loading/loading.service';
import { LoginService } from 'src/app/core/_services/login/login.service';
import { ShareUserInfosService } from 'src/app/core/_services/share-user-infos/share-user-infos.service';
import { ToastService } from 'src/app/core/_services/toast/toast.service';

@Component({
  selector: 'app-admin-side-nav-avatar',
  standalone: true,
  imports: [
    MatIconModule,
    MatMenuModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './admin-side-nav-avatar.component.html',
  styleUrl: './admin-side-nav-avatar.component.css',
})
export class AdminSideNavAvatarComponent implements AfterContentInit {
  imageUrl!: any;
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

  logout() {
    this.userAuthService.logout();
    this.toastService.openSuccess('Vous êtes deconnecter.', 'X');
    this.loadingService.isLoading.next(false);
  }
}
