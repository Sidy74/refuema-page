import { NgStyle, NgIf, NgFor, NgClass } from '@angular/common';
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
import { ActivatedRoute, Route } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';
import { PorteePublication } from 'src/app/core/_models/portee-publication';
import { TypePublication } from 'src/app/core/_models/type-publication';
import { PorteePublicationService } from 'src/app/core/_services/publication/portee/portee-publication.service';
import { TypePublicationService } from 'src/app/core/_services/publication/type/type-publication.service';

@Component({
  selector: 'app-a-edit-publication',
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
  templateUrl: './a-edit-publication.component.html',
  styleUrl: './a-edit-publication.component.css',
})
export class AEditPublicationComponent implements OnInit {
  updatePublicationForm!: FormGroup;
  editorConfig!: any;
  imagFiles!: File[];
  image: any;
  types: TypePublication[] = [];
  portees: PorteePublication[] = [];
  formControls: any;
  currentPublication!: any;

  constructor(
    private porteePublicationService: PorteePublicationService,
    private typePublicationService: TypePublicationService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.updatePublicationForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      image: [''],
      type: ['', [Validators.required]],
      portee: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
    this.formControls = this.updatePublicationForm.controls;

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
  }

  updatePublication() {}

  ngOnInit(): void {
    // Charger les types de publication
    this.typePublicationService.getAllTypePublication().subscribe({
      next: (value) => {
        if (value) {
          value.types.forEach((element: TypePublication) => {
            this.types.push(new TypePublication(element.id, element.titre));
          });
          // Une fois que les types sont chargés, vous pouvez continuer à charger les portées
          this.loadPorteesAndPublication();
        }
      },
    });

    // Création de la configuaration du input editor tiny
    this.editorConfig = {
      plugins: 'lists link image table code wordcount',
      menubar: 'edit insert view format table',
      height: '70vh',
    };
  }

  loadPorteesAndPublication(): void {
    // Charger les données de portée
    this.porteePublicationService.getAllPorteePublication().subscribe({
      next: (value) => {
        if (value) {
          value.portee.forEach((element: PorteePublication) => {
            this.portees.push(new PorteePublication(element.id, element.titre));
          });
          // Mettre à jour les attributs du formulaire avec les valeurs du router et du service
          this.route.queryParams.subscribe((params) => {
            if (params['publication']) {
              const publicationBase64 = params['publication'];
              const publicationJson = atob(publicationBase64);
              const publication = JSON.parse(publicationJson);
              this.updateFormWithPublication(publication); // Mettre à jour le formulaire avec les données de la publication
            }
          });
        }
      },
    });
  }

  updateFormWithPublication(publication: any): void {
    // Mettre à jour les attributs du formulaire avec les données de la publication
    this.updatePublicationForm.patchValue({
      title: publication.titre,
      description: publication.description,
      status: publication.status,
    });

    // Assurez-vous que le type et la portée de la publication existent dans les listes types et portees respectivement
    const type = this.types.find((t) => t.titre === publication.type);
    if (type) {
      this.formControls['type'].patchValue(type.id);
    }
    const portee = this.portees.find((p) => p.titre === publication.portee);
    if (portee) {
      this.formControls['portee'].patchValue(portee.id);
    }
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
