import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMakeComponent } from './request-make.component';

describe('RequestMakeComponent', () => {
  let component: RequestMakeComponent;
  let fixture: ComponentFixture<RequestMakeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestMakeComponent]
    });
    fixture = TestBed.createComponent(RequestMakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
