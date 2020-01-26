import { TestBed } from '@angular/core/testing';

import { TempleEventsService } from './temple-events.service';

describe('TempleEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TempleEventsService = TestBed.get(TempleEventsService);
    expect(service).toBeTruthy();
  });
});
