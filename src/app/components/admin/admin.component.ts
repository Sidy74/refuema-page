import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  standalone: true,
  imports: [EditorModule, FormsModule],
})
export class AdminComponent {
  content = '';
  getEditorContent(): void {
    console.log(this.content);
  }
}
