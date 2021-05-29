import { Component, OnInit } from '@angular/core';
import { ServiceProblem } from 'src/app/models/ServiceProblem';
import { AngularFirestore } from '@angular/fire/firestore';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  
  tickets?: ServiceProblem[];
  currentTicket?: ServiceProblem;
  currentIndex = -1;
  title = '';

  constructor(private ticketsService: TicketsService) { }

  ngOnInit(): void {
    this.retrieveTickets();
  }

  refreshList(): void {
    this.currentTicket = undefined;
    this.currentIndex = -1;
    this.retrieveTickets();
  }

  retrieveTickets(): void {
    this.ticketsService.getTickets().subscribe(actionArray => {
      this.tickets = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...(item.payload.doc.data() as ServiceProblem)
        } as ServiceProblem
      })
    })
  }

  setActiveTutorial(ticket: ServiceProblem, index: number): void {
    this.currentTicket = ticket;
    this.currentIndex = index;
  }

}
