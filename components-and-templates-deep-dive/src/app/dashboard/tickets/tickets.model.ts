export type NewTicked = { title: string, request: string };
export type Ticket = { id: string, title: string, request: string, status: TicketStatus };

export enum TicketStatus {
  OPEN = 'open',
  CLOSED = 'closed'
}
