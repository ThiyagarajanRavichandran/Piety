import { TestBed } from '@angular/core/testing';

import { EventscheduleService } from './eventschedule.service';

describe('EventscheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventscheduleService = TestBed.get(EventscheduleService);
    expect(service).toBeTruthy();
  });
});
