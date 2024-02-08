import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { AdminSideNavComponent } from './admin-side-nav/admin-side-nav.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  standalone: true,
  imports: [
    EditorModule,
    FormsModule,
    AdminSideNavComponent,
    MatSidenavModule,
    RouterOutlet,  
  ],
})
export class AdminComponent {
  drawer!: MatDrawer;

  content = '';
  getEditorContent(): void {
    console.log(this.content);
  }

}
