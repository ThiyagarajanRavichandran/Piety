import { TestBed } from '@angular/core/testing';

import { PriestList2Service } from './priest-list2.service';

describe('PriestList2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PriestList2Service = TestBed.get(PriestList2Service);
    expect(service).toBeTruthy();
  });
});
