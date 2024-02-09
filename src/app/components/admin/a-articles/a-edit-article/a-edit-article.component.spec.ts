import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AEditArticleComponent } from './a-edit-article.component';

describe('AEditArticleComponent', () => {
  let component: AEditArticleComponent;
  let fixture: ComponentFixture<AEditArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AEditArticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AEditArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
