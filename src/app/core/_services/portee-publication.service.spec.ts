import { TestBed } from '@angular/core/testing';

import { PorteePublicationService } from './portee-publication.service';

describe('PorteePublicationService', () => {
  let service: PorteePublicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorteePublicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
