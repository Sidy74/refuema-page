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
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 20
    ) {
      
      document.getElementById('navbar')!.style.padding='30px 0px'; 
      document.getElementById('toolbar')!.style.padding = '30px 10px';
      document.getElementById('logo')!.style.height = '100px';
      document.getElementById('logo')!.style.width = '100px';
      document.getElementById('toolbar')!.style.opacity ='0.91'; 
     console.log( document.documentElement.scrollTop);
      console.log( document.getElementById('navbar')!.style.padding);
     
    } else {
      document.getElementById('navbar')!.style.padding='90px 0px'; 
      document.getElementById('toolbar')!.style.padding = '90px 10px';
      document.getElementById('logo')!.style.height = '200px';
      document.getElementById('logo')!.style.width = '200px';
      document.getElementById('toolbar')!.style.opacity ='1';
      console.log( document.getElementById('navbar')!.style.padding);
    }
  }
}
