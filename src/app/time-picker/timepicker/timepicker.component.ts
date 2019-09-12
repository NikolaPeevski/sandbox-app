import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss']
})
export class TimepickerComponent implements OnInit {
  private week = [
    {
      day: 'Mo',
      morning: {
        start: {
          hours: '',
          minutes: '',
        },
        end: {
          hours: '',
          minutes: '',
        },
      },
      afternoon: {
        start: {
          hours: '',
          minutes: '',
        },
        end: {
          hours: '',
          minutes: '',
        },
      },
    },
    {
      day: 'Di',
      morning: {
        start: {
          hours: '',
          minutes: '',
        },
        end: {
          hours: '',
          minutes: '',
        },
      },
      afternoon: {
        start: {
          hours: '',
          minutes: '',
        },
        end: {
          hours: '',
          minutes: '',
        },
      },
    },
    {
      day: 'Mi',
      morning: {
        start: {
          hours: '',
          minutes: '',
        },
        end: {
          hours: '',
          minutes: '',
        },
      },
      afternoon: {
        start: {
          hours: '',
          minutes: '',
        },
        end: {
          hours: '',
          minutes: '',
        },
      },
    },
    {
      day: 'Do',
      morning: {
        start: {
          hours: '',
          minutes: '',
        },
        end: {
          hours: '',
          minutes: '',
        },
      },
      afternoon: {
        start: {
          hours: '',
          minutes: '',
        },
        end: {
          hours: '',
          minutes: '',
        },
      },
    },
    {
      day: 'Fr',
      morning: {
        start: {
          hours: '',
          minutes: '',
        },
        end: {
          hours: '',
          minutes: '',
        },
      },
      afternoon: {
        start: {
          hours: '',
          minutes: '',
        },
        end: {
          hours: '',
          minutes: '',
        },
      },
    },
    {
      day: 'Sa',
      morning: {
        start: {
          hours: '',
          minutes: '',
        },
        end: {
          hours: '',
          minutes: '',
        },
      },
      afternoon: {
        start: {
          hours: '',
          minutes: '',
        },
        end: {
          hours: '',
          minutes: '',
        },
      },
    },
  ];


  public dayDebouncer: Subject<any> = new Subject<any>();

  public weekDebouncer: Subject<any> = new Subject<any>();

  constructor() { }

  ngOnInit() {
    this.dayDebouncer.pipe(debounceTime(500), distinctUntilChanged()).subscribe(value => {
      this.handleDayUpdate(value.day, value.index);
    });

    this.weekDebouncer.pipe(debounceTime(3500), distinctUntilChanged()).subscribe(value => {
      this.handleWeekUpdate(value);
    });
  }

  onHoursChanged(day: any, index: any) {
    this.dayDebouncer.next({day, index});
  }

  handleDayUpdate(day: any, index: any) {
    const week = this.week;
    week[index] = day;
    this.weekDebouncer.next(week);
  }

  handleWeekUpdate(week: any) {
    console.log(week, new Date());
  }

}
