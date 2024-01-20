import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserMailModalComponent } from './edit-user-mail-modal.component';

describe('EditUserMailModalComponent', () => {
  let component: EditUserMailModalComponent;
  let fixture: ComponentFixture<EditUserMailModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [EditUserMailModalComponent]
});
    fixture = TestBed.createComponent(EditUserMailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
