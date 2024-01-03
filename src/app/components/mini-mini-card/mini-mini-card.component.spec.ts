import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniMiniCardComponent } from './mini-mini-card.component';

describe('MiniMiniCardComponent', () => {
  let component: MiniMiniCardComponent;
  let fixture: ComponentFixture<MiniMiniCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniMiniCardComponent]
    });
    fixture = TestBed.createComponent(MiniMiniCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
