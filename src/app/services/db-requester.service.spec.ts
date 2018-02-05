import { TestBed, inject } from '@angular/core/testing';

import { DbRequesterService } from './db-requester.service';

describe('DbRequesterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbRequesterService]
    });
  });

  it('should be created', inject([DbRequesterService], (service: DbRequesterService) => {
    expect(service).toBeTruthy();
  }));
});
