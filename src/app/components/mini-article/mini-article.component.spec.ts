import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniArticleComponent } from './mini-article.component';

describe('MiniArticleComponent', () => {
  let component: MiniArticleComponent;
  let fixture: ComponentFixture<MiniArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [MiniArticleComponent]
});
    fixture = TestBed.createComponent(MiniArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
