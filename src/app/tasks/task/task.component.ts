import {Component, input, output} from '@angular/core';
import {type Task} from "./task.model";
import {CardComponent} from "../../shared/card/card.component";
import {DatePipe} from "@angular/common";


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CardComponent,
    DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<Task>();
  onComplete = output<Task>();

  onCompleteTask(aTask: Task) {
    this.onComplete.emit(aTask)
  }
}
