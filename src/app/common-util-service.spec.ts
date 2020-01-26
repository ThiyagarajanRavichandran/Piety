import { TestBed } from '@angular/core/testing';

import { CommonUtilServiceService } from './common-util-service.service';

describe('CommonUtilServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonUtilServiceService = TestBed.get(CommonUtilServiceService);
    expect(service).toBeTruthy();
  });
});
