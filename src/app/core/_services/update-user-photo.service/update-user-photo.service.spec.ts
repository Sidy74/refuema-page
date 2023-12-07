import { TestBed } from '@angular/core/testing';

import { UpdateUserPhotoService } from './update-user-photo.service';

describe('UpdateUserPhotoService', () => {
  let service: UpdateUserPhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateUserPhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
