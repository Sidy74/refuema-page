import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
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
  ErroStatus !: string;
  constructor(private loginService: LoginService) {
    this.loginSubscription = this.loginService.isLogged().subscribe({
      next: (value) => {
        this.isAuthentified = value;
      },
    });
  }

  ngOnInit(): void {}

  logout() {
    this.loginService.logout();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById('navbar')!.style.padding = '30px 0px';
      document.getElementById('toolbar')!.style.padding = '30px 10px';
      document.getElementById('logo')!.style.height = '100px';
      document.getElementById('logo')!.style.width = '100px';
      document.getElementById('toolbar')!.style.opacity = '0.91';
    } else {
      document.getElementById('navbar')!.style.padding = '90px 0px';
      document.getElementById('toolbar')!.style.padding = '90px 10px';
      document.getElementById('logo')!.style.height = '200px';
      document.getElementById('logo')!.style.width = '200px';
      document.getElementById('toolbar')!.style.opacity = '1';
    }
  }

  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe();
  }
}
