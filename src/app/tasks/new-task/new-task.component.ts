import {Component, output} from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  onClose = output<void>();

  onModalClose() {
    this.onClose.emit();
  }
}
