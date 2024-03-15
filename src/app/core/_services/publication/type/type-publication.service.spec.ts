import { TestBed } from '@angular/core/testing';

import { TypePublicationService } from './type-publication.service';

describe('TypePublicationService', () => {
  let service: TypePublicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypePublicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
