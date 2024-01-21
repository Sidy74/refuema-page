import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AArticlesComponent } from './a-articles.component';

describe('AArticlesComponent', () => {
  let component: AArticlesComponent;
  let fixture: ComponentFixture<AArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AArticlesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
