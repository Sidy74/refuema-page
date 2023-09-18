import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css'],
})
export class ScrollToTopComponent {
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    var mybutton = document.getElementById('go_to-top-button');
    if (mybutton!.className.includes(' active')) {
      mybutton!.className = mybutton!.className.split(' active')[0];
    }
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
     
      if (mybutton!.className.includes(' active')) {
       
        mybutton!.className = mybutton!.className.split(' active')[0];
      }
      mybutton!.className += ' active';

      // mybutton!.style.display = 'block';
      // mybutton!.style.transition = 'display 3s';
    } else {
      mybutton!.style.display = 'none';
    }
  }

  goToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
