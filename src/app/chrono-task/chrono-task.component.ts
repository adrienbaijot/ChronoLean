import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ChronoTask} from 'app/task';
import {ChronoTaskService} from 'app/chrono-task-service.service'

@Component({
  selector: 'chrono-task',
  templateUrl: './chrono-task.component.html',
  styleUrls: ['./chrono-task.component.css', '../app.component.css'],
  providers: [ChronoTaskService]
})
export class ChronoTaskComponent implements OnInit {
  public showTaskOptions: Boolean;
  @Input() public task: ChronoTask;
  public taskElements: string[];
  public taskTypes: string[];
  @Output() eventRemoveTask = new EventEmitter();
  constructor(private ChronoTaskService: ChronoTaskService) {}
  ngOnInit() {
    this.showTaskOptions=false;
    this.taskElements = this.ChronoTaskService.getTaskElements();
    this.taskTypes = this.ChronoTaskService.getTaskTypes();
  }
  removeTask(){
    this.eventRemoveTask.emit(this.task.originalPosition);
  }

}
