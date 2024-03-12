import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AProfilComponent } from './a-profil.component';

describe('AProfilComponent', () => {
  let component: AProfilComponent;
  let fixture: ComponentFixture<AProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AProfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
