import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APublicationsPublicComponent } from './a-publications-public.component';

describe('APublicationsPublicComponent', () => {
  let component: APublicationsPublicComponent;
  let fixture: ComponentFixture<APublicationsPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APublicationsPublicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(APublicationsPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
