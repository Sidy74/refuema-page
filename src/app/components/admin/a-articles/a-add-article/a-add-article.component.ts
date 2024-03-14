import { AfterContentInit, Component, OnInit } from '@angular/core';
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
import { ArticleService } from 'src/app/core/_services/article/article.service';
import { PorteePublicationService } from 'src/app/core/_services/portee-publication.service';
import { TypePublicationService } from 'src/app/core/_services/type-publication.service';
import { ToastService } from 'src/app/core/_services/toast/toast.service';
import { Router } from '@angular/router';

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
export class AAddArticleComponent implements OnInit, AfterContentInit {
  addArticleForm!: FormGroup;
  image: any;
  editorConfig!: any;
  panelOpenState = false;
  imagFiles!: File[];
  portee!: any;
  type!: any;
  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private porteePublicationService: PorteePublicationService,
    private typePublicationService: TypePublicationService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngAfterContentInit(): void {
    this.porteePublicationService.getPorteeAritcle().subscribe({
      next: (value) => {
        if (value) this.portee = value.id;
      },
    });
    this.typePublicationService.getTypeArticle().subscribe({
      next: (value) => {
        if (value) {
          this.type = value.id;
        }
      },
    });
  }

  ngOnInit(): void {
    this.addArticleForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      image: [''],
      description: ['', [Validators.required]],
    });
    this.editorConfig = {
      plugins: 'lists link image table code wordcount',
      menubar: 'edit insert view format table',
      height: '70vh',
    };
  }
  addArticle() {
    this.articleService.addArtilce(this.articleToFormData()).subscribe({
      next: (value) => {
        console.log(value);
        this.toastService.openSuccess(value.message, 'x');
        this.router.navigateByUrl('/admin/articles');
      },
      error(err) {
        console.log(err);
      },
    });
  }

  articleToFormData() {
    let formData = new FormData();

    formData.append('titre', this.addArticleForm.controls['title'].value);
    formData.append(
      'description',
      this.addArticleForm.controls['description'].value
    );
    formData.append('portee', this.portee);
    formData.append('type', this.type);
    console.log(this.imagFiles);

    for (const key in this.imagFiles) {
      if (Object.prototype.hasOwnProperty.call(this.imagFiles, key)) {
        const element = this.imagFiles[key];
        console.log(element);
        formData.append('media[]', element);
      }
    }
   
    return formData;
  }
  onFileSelected(event: any) {
    this.imagFiles = event.target.files;

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
