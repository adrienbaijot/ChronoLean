import { Injectable } from '@angular/core';

/*
* Service used for variables used across the app : task Elements and task Types
* Both can be modified: Types via option menu and Elements via the project setup
 */
@Injectable()
export class ChronoTaskService {
  private taskElements: string[];
  private taskTypes: string[];
  constructor() {
    this.taskElements = ["A", "B", "C", "D", "E", "NVA"];
    this.taskTypes = ["Operation", "Control", "Stock", "Movement", "Idle"];
  }
  getTaskElements () {
    return this.taskElements;
  }
  getTaskTypes () {
    return this.taskTypes;
  }

}
