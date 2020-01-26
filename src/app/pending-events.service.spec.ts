import { TestBed } from '@angular/core/testing';

import { PendingEventsService } from './pending-events.service';

describe('PendingEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PendingEventsService = TestBed.get(PendingEventsService);
    expect(service).toBeTruthy();
  });
});
