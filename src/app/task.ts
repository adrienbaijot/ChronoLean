import {Time} from 'app/time';

export class ChronoTask {
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
}
