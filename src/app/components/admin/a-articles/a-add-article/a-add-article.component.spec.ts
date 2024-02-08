import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAddArticleComponent } from './a-add-article.component';

describe('AAddArticleComponent', () => {
  let component: AAddArticleComponent;
  let fixture: ComponentFixture<AAddArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AAddArticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AAddArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
