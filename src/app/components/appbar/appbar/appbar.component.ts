import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css'],
})
export class AppbarComponent {
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById('toolbar')!.style.padding = '30px 10px';
      document.getElementById('logo')!.style.height = '100px';
      document.getElementById('logo')!.style.width = '100px';
    } else {
      document.getElementById('toolbar')!.style.padding = '80px 10px';
      document.getElementById('logo')!.style.height = '200px';
      document.getElementById('logo')!.style.width = '200px';
    }
  }
}
