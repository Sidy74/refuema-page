import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvViewComponent } from './cv-view.component';

describe('CvViewComponent', () => {
  let component: CvViewComponent;
  let fixture: ComponentFixture<CvViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvViewComponent]
    });
    fixture = TestBed.createComponent(CvViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
