import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APublicationsComponent } from './a-publications.component';

describe('APublicationsComponent', () => {
  let component: APublicationsComponent;
  let fixture: ComponentFixture<APublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APublicationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(APublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
