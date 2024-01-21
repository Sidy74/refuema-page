import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { EditorModule } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-admin-side-nav',
  standalone: true,
  imports: [MatSidenavModule,EditorModule,FormsModule, NgIf],
  templateUrl: './admin-side-nav.component.html',
  styleUrl: './admin-side-nav.component.css',
})
export class AdminSideNavComponent {
  showFiller = false;
  @Input() drawer!: MatDrawer;
  content = '';
  getEditorContent(): void {
    console.log(this.content);
  }
  
}
