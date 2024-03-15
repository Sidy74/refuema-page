import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APublicationsPriveeComponent } from './a-publications-privee.component';

describe('APublicationsPriveeComponent', () => {
  let component: APublicationsPriveeComponent;
  let fixture: ComponentFixture<APublicationsPriveeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APublicationsPriveeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(APublicationsPriveeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
