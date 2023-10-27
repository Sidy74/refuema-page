import { AfterContentInit, Component, HostListener } from '@angular/core';
import { UserAuthService } from 'src/app/core/_services/user-auth.service';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css'],
})
export class AppbarComponent implements AfterContentInit{
  isAuthentified!: boolean;
  constructor(public userAuthService: UserAuthService) {
    
  }
  ngAfterContentInit(): void {
    this.isAuthentified = this.userAuthService.isUserAuthService;
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
}
