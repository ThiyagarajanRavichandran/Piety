import { TestBed } from '@angular/core/testing';

import { PatronList2Service } from './patron-list2.service';

describe('PatronList2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatronList2Service = TestBed.get(PatronList2Service);
    expect(service).toBeTruthy();
  });
});
