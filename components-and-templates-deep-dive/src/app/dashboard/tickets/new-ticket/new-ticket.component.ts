import {Component, ElementRef, output, viewChild} from '@angular/core';
import {ButtonComponent} from "../../../shared/button/button.component";
import {ControlComponent} from "../../../shared/control/control.component";
import {FormsModule} from "@angular/forms";
import {NewTicked} from "../tickets.model";


@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    ButtonComponent,
    ControlComponent,
    FormsModule
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  private currentForm = viewChild.required<ElementRef<HTMLFormElement>>('form');

  tickedAdded = output<NewTicked>();

  onSubmit(task: NewTicked) {
    this.tickedAdded.emit(task);
  }
}
