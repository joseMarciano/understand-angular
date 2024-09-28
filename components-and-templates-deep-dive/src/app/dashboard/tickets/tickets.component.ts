import { Component } from '@angular/core';
import {NewTicketComponent} from "./new-ticket/new-ticket.component";
import {NewTicked, TicketStatus, Ticket} from "./tickets.model";
import {TicketComponent} from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [
    NewTicketComponent,
    TicketComponent
  ],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onTickedAdded(newTask: NewTicked) {
    this.tickets.push({
      id: Math.random().toString(),
      status: TicketStatus.OPEN,
      title: newTask.title,
      request: newTask.request,
    });
  }
}
