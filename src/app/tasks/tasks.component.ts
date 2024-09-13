import {Component, input} from '@angular/core';

type User = {
  id: string,
  name: string,
  avatar: string,
}


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  currentUser = input<User>();
}
