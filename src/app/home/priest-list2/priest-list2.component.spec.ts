import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriestList2Component } from './priest-list2.component';

describe('PriestList2Component', () => {
  let component: PriestList2Component;
  let fixture: ComponentFixture<PriestList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriestList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriestList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
