import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AViewArticleComponent } from './a-view-article.component';

describe('AViewArticleComponent', () => {
  let component: AViewArticleComponent;
  let fixture: ComponentFixture<AViewArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AViewArticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AViewArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
