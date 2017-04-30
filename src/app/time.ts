export class Time {
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
    display += this.min + "m ";
    display += this.s + "s ";
    if(this.ms<10) display += "0";
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
