import {Component} from '@angular/core';
import {ChronoTask} from 'app/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public tasks: ChronoTask[] = new Array();
  constructor(){}
  removeTask(originalPosition: number) {
    let index = this.tasks.map(function (e) {
      return e.originalPosition
    }).indexOf(originalPosition);
    this.tasks.splice(index, 1);
  }
}
