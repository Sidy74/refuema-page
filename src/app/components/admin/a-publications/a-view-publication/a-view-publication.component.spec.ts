import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AViewPublicationComponent } from './a-view-publication.component';

describe('AViewPublicationComponent', () => {
  let component: AViewPublicationComponent;
  let fixture: ComponentFixture<AViewPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AViewPublicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AViewPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
