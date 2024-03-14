import { NgStyle, NgIf, NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';
import { PorteePublication } from 'src/app/core/_models/portee-publication';
import { TypePublication } from 'src/app/core/_models/type-publication';
import { LoadingService } from 'src/app/core/_services/loading/loading.service';
import { PorteePublicationService } from 'src/app/core/_services/portee-publication.service';
import { PublicationService } from 'src/app/core/_services/publication/publication.service';
import { ToastService } from 'src/app/core/_services/toast/toast.service';
import { TypePublicationService } from 'src/app/core/_services/type-publication.service';

@Component({
  selector: 'app-a-add-publication',
  standalone: true,
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
    NgFor,
    NgClass,
    MatExpansionModule,
  ],
  templateUrl: './a-add-publication.component.html',
  styleUrl: './a-add-publication.component.css',
})
export class AAddPublicationComponent implements OnInit {
  addPublicationForm!: FormGroup;
  editorConfig!: any;
  imagFiles!: File[];
  image: any;
  types: TypePublication[] = [];
  portees: PorteePublication[] = [];
  formControls: any;

  constructor(
    private fb: FormBuilder,
    private typePublicationService: TypePublicationService,
    private porteePublicationService: PorteePublicationService,
    private publicationService: PublicationService,
    private toastService: ToastService,
    private loadingService: LoadingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.porteePublicationService.getAllPorteePublication().subscribe({
      next: (value) => {
        if (value) {
          value.portee.forEach((element: PorteePublication) => {
            this.portees.push(new PorteePublication(element.id, element.titre));
          });
          this.formControls['portee'].patchValue(this.portees[0].id);
        }
      },
    });
    this.typePublicationService.getAllTypePublication().subscribe({
      next: (value) => {
        if (value) {
          value.types.forEach((element: TypePublication) => {
            this.types.push(new TypePublication(element.id, element.titre));
          });

          this.formControls['type'].patchValue(this.types[0].id);
        }
      },
    });
    this.addPublicationForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      image: [''],
      type: ['', [Validators.required]],
      portee: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
    this.formControls = this.addPublicationForm.controls;
    this.editorConfig = {
      plugins: 'lists link image table code wordcount',
      menubar: 'edit insert view format table',
      height: '70vh',
    };
  }

  addPublication() {
    console.log('click add publication');
    console.log(this.addPublicationForm);
    this.publicationService
      .addPublication(this.publicationToFormData())
      .subscribe({
        next: (value: any) => {
          this.toastService.openSuccess(value.message, 'x');
          this.router.navigateByUrl('/admin/publications');
        },
      });
  }

  publicationToFormData() {
    let formData = new FormData();
    formData.append('titre', this.formControls['title'].value);
    formData.append('description', this.formControls['description'].value);
    formData.append('portee', this.formControls['portee'].value);
    formData.append('type', this.formControls['type'].value);

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
