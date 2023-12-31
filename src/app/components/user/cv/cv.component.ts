import { AfterContentInit, Component } from '@angular/core';
import { CvService } from 'src/app/core/_services/cv/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements AfterContentInit {
  haveCV: boolean = true;
  isLoading = true;
  editMode: boolean = false;

  constructor(private cvService: CvService) {}
  ngAfterContentInit(): void {
    this.cvService.getCV().subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  enableEditMode() {
    this.editMode = true;
  }

  disableEditMode() {
    this.editMode = false;
  }

  updateContent() {}

  addCV() {}
}
