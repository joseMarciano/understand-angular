import {Component, output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NewTaskCreated} from "./new-task.model";

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
  onClose = output<void>();
  onSave = output<NewTaskCreated>();

  title = signal("");
  summary = signal("");
  dueDate = signal("");

  onModalClose() {
    this.onClose.emit();
  }

  onTaskSave() {
    this.onSave.emit({
      title: this.title(),
      summary: this.summary(),
      dueDate: this.dueDate(),
    })
  }


  private clearModal() {
    this.title.set("")
    this.summary.set("")
    this.dueDate.set("")
  }
}
