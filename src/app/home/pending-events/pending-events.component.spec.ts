import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingEventsComponent } from './pending-events.component';

describe('PendingEventsComponent', () => {
  let component: PendingEventsComponent;
  let fixture: ComponentFixture<PendingEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
