import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AEditPublicationComponent } from './a-edit-publication.component';

describe('AEditPublicationComponent', () => {
  let component: AEditPublicationComponent;
  let fixture: ComponentFixture<AEditPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AEditPublicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AEditPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
