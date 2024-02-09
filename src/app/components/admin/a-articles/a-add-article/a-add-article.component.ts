import { Component, OnInit } from '@angular/core';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { NgClass, NgIf, NgStyle } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-a-add-article',
  standalone: true,
  providers: [provideNativeDateAdapter()],

  imports: [
    EditorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    NgStyle,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgClass,
    MatExpansionModule,
  ],
  templateUrl: './a-add-article.component.html',
  styleUrl: './a-add-article.component.css',
})
export class AAddArticleComponent implements OnInit {
  addArticleForm!: FormGroup;
  image: any;
  editorConfig!: any;
  panelOpenState = false;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.addArticleForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      realisationDate: ['', [Validators.required]],
      image: [''],
      description: ['', [Validators.required]],
    });
    this.editorConfig = {
      plugins: 'lists link image table code wordcount',
      menubar: 'edit insert view format table',
      height: '100vh',
    };
  }
  addArticle() {
    console.log(this.addArticleForm);
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.image = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
