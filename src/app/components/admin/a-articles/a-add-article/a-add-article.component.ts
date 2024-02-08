import { Component } from '@angular/core';
import { EditorModule } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-a-add-article',
  standalone: true,
  imports: [EditorModule],
  templateUrl: './a-add-article.component.html',
  styleUrl: './a-add-article.component.css'
})
export class AAddArticleComponent {

}
