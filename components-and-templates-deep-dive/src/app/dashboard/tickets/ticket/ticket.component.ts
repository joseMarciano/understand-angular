import {Component, input} from '@angular/core';
import {Ticket, TicketStatus} from "../tickets.model";

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>()

  protected readonly TicketStatus = TicketStatus;
}
