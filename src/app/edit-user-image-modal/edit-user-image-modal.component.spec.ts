import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserImageModalComponent } from './edit-user-image-modal.component';

describe('EditUserImageModalComponent', () => {
  let component: EditUserImageModalComponent;
  let fixture: ComponentFixture<EditUserImageModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditUserImageModalComponent]
    });
    fixture = TestBed.createComponent(EditUserImageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
