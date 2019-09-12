import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepickerDayComponent } from './timepicker-day.component';

describe('TimepickerDayComponent', () => {
  let component: TimepickerDayComponent;
  let fixture: ComponentFixture<TimepickerDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimepickerDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimepickerDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
