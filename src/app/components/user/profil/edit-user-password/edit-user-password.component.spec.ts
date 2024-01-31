import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserPasswordComponent } from './edit-user-password.component';

describe('EditUserPasswordComponent', () => {
  let component: EditUserPasswordComponent;
  let fixture: ComponentFixture<EditUserPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [EditUserPasswordComponent]
});
    fixture = TestBed.createComponent(EditUserPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
