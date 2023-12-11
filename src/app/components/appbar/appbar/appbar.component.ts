import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/core/_services/login.service';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css'],
})
export class AppbarComponent implements OnInit, OnDestroy {
  loginSubscription?: Subscription;
  isAuthentified!: boolean;
  ErroStatus!: string;
  isMobileDevice!: boolean;
  isOpen: boolean = false;
  numClick = 0;

  constructor(private loginService: LoginService) {
    this.loginSubscription = this.loginService.isLogged().subscribe({
      next: (value) => {
        this.isAuthentified = value;
      },
    });
  }

  ngOnInit(): void {
    if (screen.width <= 600) {
      this.isMobileDevice = true;
    }
  }

  logout() {
    this.loginService.logout();
  }

  @HostListener('window:click', ['$event'])
  onclick(event: any) {
    const navbar_center_mobile = document.getElementById('menu-items-mobile');

    if (navbar_center_mobile) {
      if (navbar_center_mobile.contains(event.target)) return;

      if (!navbar_center_mobile.contains(event.target) && this.numClick > 0) {
        this.isOpen = false;
        this.numClick = 0;
        return;
      }
      if (
        !navbar_center_mobile.isEqualNode(event.target) &&
        this.numClick > 0
      ) {
        this.isOpen = false;
        this.numClick = 0;
        return;
      }
      if (this.isOpen) this.numClick++;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (!this.isMobileDevice) {
      if (
        document.body.scrollTop > 10 ||
        document.documentElement.scrollTop > 20
      ) {
        document.getElementById('navbar')!.style.padding = '30px 0px';
        document.getElementById('toolbar')!.style.padding = '30px 10px';
        document.getElementById('logo')!.style.height = '100px';
        document.getElementById('logo')!.style.width = '100px';
        document.getElementById('toolbar')!.style.opacity = '0.86';
        document.getElementById('fixed-div')!.style.opacity = '0.86';
      } else {
        document.getElementById('navbar')!.style.padding = '90px 0px';
        document.getElementById('toolbar')!.style.padding = '90px 10px';
        document.getElementById('logo')!.style.height = '200px';
        document.getElementById('logo')!.style.width = '200px';
        document.getElementById('toolbar')!.style.opacity = '1';
      }
    }
  }

  closeMenuHamburger() {
    this.isOpen = false;
  }
  clickMenuHamburger() {
    var x = document.getElementById('menuItems');
    if (x?.className === 'navbar-center') {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
  }

  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe();
  }
}
