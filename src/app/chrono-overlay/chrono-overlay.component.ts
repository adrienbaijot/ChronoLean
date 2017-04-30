import { Component, OnInit, Input } from '@angular/core';
import {Observable, Subscription} from 'rxjs/Rx';

import {Time} from 'app/time';
import {ChronoTask} from 'app/task';
@Component({
  selector: 'chrono-overlay',
  templateUrl: './chrono-overlay.component.html',
  styleUrls: ['./chrono-overlay.component.css','../app.component.css']
})
export class ChronoOverlayComponent implements OnInit{
  public xsHideMenu: Boolean;
  public chrono: Time;
  public lastTask: Time;
  @Input() tasks: ChronoTask[];
  public allureFactor;
  public taskCount: number;
  @Input() public taskElements: string[];
  public selectTaskElement: string;
  @Input() public taskTypes: string[];
  public selectTaskType: string;
  public majoration: number;
  timer = Observable.timer(10, 10);
  timersub: Subscription;
  constructor() { }

  ngOnInit() {
    this.xsHideMenu = true;
    this.chrono = new Time();
    this.lastTask = new Time();
    this.allureFactor = 100;
    this.taskCount = 0;
  }

  showMenu() {
    this.xsHideMenu = this.xsHideMenu ? false : true;
  }

  startChrono() {
    this.timersub = this.timer.subscribe(t => {
      this.chrono.incrementTime()
    });
  }

  stopChrono() {
    this.timersub.unsubscribe();
  }

  resetChrono() {
    this.stopChrono();
    this.chrono.reset();
    this.lastTask.reset();
  }

  addTask() {
    this.taskCount++;
    let t = this.chrono;
    this.tasks.push(new ChronoTask(this.chrono.timeDifference(this.lastTask), this.taskCount, this.selectTaskElement, this.allureFactor, this.majoration, this.selectTaskType));
    this.lastTask.updateTime(t.ms, t.s, t.min, t.h);//change lastTask so we remember time of this task for next one
  }

  removeTask(originalPosition: number) {
    let index = this.tasks.map(function (e) {
      return e.originalPosition
    }).indexOf(originalPosition);
    this.tasks.splice(index, 1);
  }
}
