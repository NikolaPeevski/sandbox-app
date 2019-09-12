import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: '[app-timepicker-day]',
  templateUrl: './timepicker-day.component.html',
  styleUrls: ['./timepicker-day.component.scss']
})
export class TimepickerDayComponent implements OnInit {

  @Input() day;
  @Input() index;

  public dayDebouncer: Subject<any> = new Subject<any>();
  @Output() emitter = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
    this.dayDebouncer.pipe(debounceTime(1500), distinctUntilChanged()).subscribe(value => {
      this.emitter.emit({value, index: this.index});
    });

  }

  // TODO: Add debounce
  emitChange(time, type): void {
    switch (type) {
      case 0:
        this.day.morning.start.hours = time;
        break;

      case 1:
        this.day.morning.start.minutes = time;
        break;

      case 2:
        this.day.morning.end.hours = time;
        break;

      case 3:
        this.day.morning.end.minutes = time;
        break;

      case 4:
        this.day.afternoon.start.hours = time;
        break;

      case 5:
        this.day.afternoon.start.minutes = time;
        break;

      case 6:
        this.day.afternoon.end.hours = time;
        break;

      case 7:
      this.day.afternoon.end.minutes = time;
      break;

      default:
        break;
    }
  // TODO: Change to Emitting
    this.dayDebouncer.next(this.day);
  }

}
