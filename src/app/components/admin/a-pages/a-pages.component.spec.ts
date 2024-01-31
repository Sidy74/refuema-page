import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APagesComponent } from './a-pages.component';

describe('APagesComponent', () => {
  let component: APagesComponent;
  let fixture: ComponentFixture<APagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(APagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
