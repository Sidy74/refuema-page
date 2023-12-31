import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  haveCV :boolean =true;
  editMode: boolean = false;
  content ='djkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'
  enableEditMode() {
    this.editMode = true;
  }

  disableEditMode() {
    this.editMode = false;
  }

  updateContent() {
    
  }


  AddCV(){}

}
