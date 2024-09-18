import {Component, inject, input, output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  private readonly tasksService = inject(TasksService)

  onClose = output<void>();
  userId = input.required<string>();

  title = signal("");
  summary = signal("");
  dueDate = signal("");

  onModalClose() {
    this.onClose.emit();
  }

  onTaskSave() {
    this.tasksService.addTask({
      title: this.title(),
      summary: this.summary(),
      dueDate: this.dueDate(),
    }, this.userId());

    this.onModalClose();
  }
}
