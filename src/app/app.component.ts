import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminComponent } from './components/admin/admin.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppbarComponent } from './components/appbar/appbar/appbar.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { AdminSideNavComponent } from './components/admin/admin-side-nav/admin-side-nav.component';
import { Subscription } from 'rxjs';
import { ShareUserInfosService } from './core/_services/share-user-infos.service';
import { UserRole } from './core/_helpers/_enums/user-role';
import { User } from './core/_models/user..models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    AdminComponent,
    FooterComponent,
    AppbarComponent,
    ScrollToTopComponent,
    RouterOutlet,
    NgIf,
    CommonModule,
    AdminSideNavComponent,
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  [x: string]: any;
  userRoleSubscription!: Subscription;
  title = 'refue-m';
  isUser: boolean = true;

  constructor(private shareUserInfosService: ShareUserInfosService) {}
  ngOnInit(): void {
    this.userRoleSubscription = this.shareUserInfosService
      .getUserRole()
      .subscribe({
        next: (value) => {
          if (value === UserRole.Admin) {
            this.isUser = false;
          } else if (value === UserRole.User) {
            this.isUser = true;
          }
        },
      });
  }
  ngOnDestroy(): void {
    this.userRoleSubscription.unsubscribe();
  }
}
