import { TestBed } from '@angular/core/testing';

import { ShareUserInfosService } from './share-user-infos.service';

describe('ShareUserInfosService', () => {
  let service: ShareUserInfosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareUserInfosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
