import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventscheduleComponent } from './eventschedule.component';

describe('EventscheduleComponent', () => {
  let component: EventscheduleComponent;
  let fixture: ComponentFixture<EventscheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventscheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
