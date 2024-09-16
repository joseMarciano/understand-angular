import {Component, input, Input} from '@angular/core';


type Task = {
  id: string;
  userId: string;
  name: string;
  summary: string;
  dueDate: string;
}


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<Task>();



  formatDate(stringDate: string): string {
    return new Intl.DateTimeFormat("pt-br").format(new Date(stringDate))
  }
}
