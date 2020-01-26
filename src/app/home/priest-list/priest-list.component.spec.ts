import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriestListComponent } from './priest-list.component';

describe('PriestListComponent', () => {
  let component: PriestListComponent;
  let fixture: ComponentFixture<PriestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
