import {Component, input, signal} from '@angular/core';
import {Ticket, TicketStatus} from "../tickets.model";

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  protected readonly TicketStatus = TicketStatus;

  data = input.required<Ticket>();
  detailsVisible = signal(false);

  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update(oldValue => !oldValue);
  }
}
