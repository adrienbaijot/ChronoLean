import { Component } from '@angular/core';
import {Observable, Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  public chrono: Time = new Time();
  public lastTask: Time = new Time();
  public tasks: Task[] = new Array();
  public allureFactor = 100;
  public taskCount = 0;
  public taskElements = ["A", "B", "C", "D", "E", "NVA"];
  public selectTaskElement: string;
  public taskTypes = ["Operation", "Control", "Stock", "Movement", "Idle"];
  public selectTaskType: string;
  public majoration: number;
  timer = Observable.timer(10,10);
  test: Subscription;
  startChrono(){
    this.test = this.timer.subscribe(t=>{this.chrono.incrementTime()});
  }
  stopChrono(){
    this.test.unsubscribe();
  }
  resetChrono(){
    this.stopChrono();
    this.chrono.reset();
    this.lastTask.reset();
  }
  addTask(){
    this.taskCount ++;
    let t = this.chrono;
    this.tasks.push(new Task(this.chrono.timeDifference(this.lastTask), this.taskCount, this.selectTaskElement, this.allureFactor, this.majoration, this.selectTaskType));
    this.lastTask.updateTime(t.ms, t.s, t.min, t.h);//change lastTask so we remember time of this task for next one
  }
  removeTask(originalPosition: number){
    let index = this.tasks.map(function(e){return e.originalPosition}).indexOf(originalPosition);
    this.tasks.splice(index,1);
  }
}
class Task{
  public timeValue: Time;
  public allureFactor: number;
  public majoration: number;
  public originalPosition: number;
  public taskElement: string;
  public taskType: string;
  constructor(timeValue?: Time, originalPosition?:number, taskElement?:string, allureFactor?: number, majoration?:number, taskType?: string) {
    this.timeValue = timeValue || new Time();
    this.allureFactor = allureFactor || 100;
    this.majoration = majoration || 0;
    this.originalPosition = originalPosition || 0;
    this.taskType = taskType || "undefined";
    this.taskElement = taskElement || "undefined";
  }
  standardDuration(){
    let coeff = (+this.allureFactor + +this.majoration)/100; //the second + is here to cast a string as a number (mdInput stringify its value)
    return this.timeValue.timeMultiply(coeff);
  }
  test(){

  }
}
class Time{
  h: number;
  min: number;
  s: number;
  ms: number;
  constructor(ms?:number, s?:number, min?: number, h?: number){
    this.h = h || 0;
    this.min = min || 0;
    this.s = s || 0;
    this.ms = ms || 0;
  }
  incrementTime() {
    this.ms++;
    if (this.ms >= 100) {
      this.s++;
      this.ms = 0;
      if (this.s >= 60) {
        this.min++;
        this.s = 0;
        if (this.min >= 60) {
          this.h++;
          this.min = 0;
        }
      }
    }
  }
  updateTime(ms?:number, s?:number, min?:number, h?:number){
    this.h = h || this.h;
    this.min = min || this.min;
    this.s = s || this.s;
    this.ms = ms || this.ms;
  }
  displayTime(){
    let display = "";
    if(this.h>0) display += this.h + "h ";
    if(this.min>0) display += this.min + "min ";
    if(this.s>0) display += this.s + "s ";
    display += this.ms;
    return display;
  }
  totalMs(){
    return (this.ms + this.s*100 + this.min*6000 + this.h*360000);
  }
  fromTotal(total: number){
    this.h = Math.floor(total/360000); //round down
    total %= 360000;
    this.min = Math.floor(total/6000);
    total %=6000;
    this.s = Math.floor(total/100);
    total %=100;
    this.ms = total;
  }
  timeDifference(t: Time){
    let total = Math.abs(this.totalMs() - t.totalMs());
    let res = new Time();
    res.fromTotal(total);
    return res;
  }
  timeMultiply(coeff: number){
    let total = this.totalMs();
    total = Math.round(total*coeff);
    let res = new Time();
    res.fromTotal(total);
    return res;
  }
  reset(){
    this.h = 0;
    this.min = 0;
    this.s = 0;
    this.ms = 0;
  }
}
