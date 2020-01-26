import { TestBed } from '@angular/core/testing';

import { DashboardEventService } from './dashboard-event.service';

describe('DashboardEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardEventService = TestBed.get(DashboardEventService);
    expect(service).toBeTruthy();
  });
});
