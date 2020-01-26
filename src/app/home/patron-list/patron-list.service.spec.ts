import { TestBed } from '@angular/core/testing';

import { PatronListService } from './patron-list.service';

describe('PatronListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatronListService = TestBed.get(PatronListService);
    expect(service).toBeTruthy();
  });
});
