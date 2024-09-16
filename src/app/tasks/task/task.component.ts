import {Component, input, output} from '@angular/core';
import {type Task} from "./task.model";


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<Task>();
  onComplete = output<Task>();


  formatDate(stringDate: string): string {
    return new Intl.DateTimeFormat("pt-br").format(new Date(stringDate))
  }

  onCompleteTask(aTask: Task) {
    this.onComplete.emit(aTask)
  }
}
