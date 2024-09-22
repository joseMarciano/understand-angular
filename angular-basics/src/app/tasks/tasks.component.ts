import {Component, input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {type User} from "../user/user.model";
import {Task} from "./task/task.model";
import {NewTaskComponent} from "./new-task/new-task.component";
import {type NewTaskCreated} from "./new-task/new-task.model";
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  currentUser = input<User>();
  isDialogOpen = false;


  constructor(private readonly tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.currentUser()?.id!);
  }

  onCompleteTask(aTask: Task) {
    this.tasksService.completeTask(aTask.id)
  }

  onStartAddTask() {
    this.isDialogOpen = true;
  }

  onCancelAddTask() {
    this.isDialogOpen = false;
  }

  onTaskSave($event: NewTaskCreated) {
    this.tasksService.addTask($event, this.currentUser()?.id!)
    this.onCancelAddTask();
  }
}
