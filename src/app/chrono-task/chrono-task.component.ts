import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ChronoTask} from 'app/task';


@Component({
  selector: 'chrono-task',
  templateUrl: './chrono-task.component.html',
  styleUrls: ['./chrono-task.component.css', '../app.component.css'],
})
export class ChronoTaskComponent implements OnInit {
  public showTaskOptions: Boolean;
  @Input() public task: ChronoTask;
  @Input() public taskElements: string[];
  @Input() public taskTypes: string[];
  @Output() eventRemoveTask = new EventEmitter();
  constructor() {
  }
  ngOnInit() {
    this.showTaskOptions=false;
  }
  removeTask(){
    this.eventRemoveTask.emit(this.task.originalPosition);
  }

}
