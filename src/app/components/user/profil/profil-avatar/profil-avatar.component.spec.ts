import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilAvatarComponent } from './profil-avatar.component';

describe('ProfilAvtarComponent', () => {
  let component: ProfilAvatarComponent;
  let fixture: ComponentFixture<ProfilAvatarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilAvatarComponent],
    });
    fixture = TestBed.createComponent(ProfilAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
