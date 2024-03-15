import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APublicationNoAccptedComponent } from './a-publication-no-accpted.component';

describe('APublicationNoAccptedComponent', () => {
  let component: APublicationNoAccptedComponent;
  let fixture: ComponentFixture<APublicationNoAccptedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APublicationNoAccptedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(APublicationNoAccptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
