import { Component } from '@angular/core';
import { AdminComponent } from './components/admin/admin.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppbarComponent } from './components/appbar/appbar/appbar.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';

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
    RouterOutlet,NgIf,
    CommonModule
  ],
})
export class AppComponent {
  isAdmin = false;
  title = 'refue-m';
}
