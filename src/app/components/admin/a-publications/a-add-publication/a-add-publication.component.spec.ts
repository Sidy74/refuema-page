import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAddPublicationComponent } from './a-add-publication.component';

describe('AAddPublicationComponent', () => {
  let component: AAddPublicationComponent;
  let fixture: ComponentFixture<AAddPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AAddPublicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AAddPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
