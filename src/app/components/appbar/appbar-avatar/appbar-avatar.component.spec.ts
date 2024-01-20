import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppbarAvatarComponent } from './appbar-avatar.component';

describe('AppbarAvatarComponent', () => {
  let component: AppbarAvatarComponent;
  let fixture: ComponentFixture<AppbarAvatarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [AppbarAvatarComponent]
});
    fixture = TestBed.createComponent(AppbarAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
