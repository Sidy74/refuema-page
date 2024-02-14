import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSideNavAvatarComponent } from './admin-side-nav-avatar.component';

describe('AdminSideNavAvatarComponent', () => {
  let component: AdminSideNavAvatarComponent;
  let fixture: ComponentFixture<AdminSideNavAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSideNavAvatarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminSideNavAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
