import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatronList2Component } from './patron-list2.component';

describe('PatronList2Component', () => {
  let component: PatronList2Component;
  let fixture: ComponentFixture<PatronList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatronList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatronList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
