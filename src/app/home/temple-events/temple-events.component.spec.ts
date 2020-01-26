import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleEventsComponent } from './temple-events.component';

describe('TempleEventsComponent', () => {
  let component: TempleEventsComponent;
  let fixture: ComponentFixture<TempleEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempleEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
