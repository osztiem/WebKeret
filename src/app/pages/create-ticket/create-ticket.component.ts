import { Component, OnInit } from '@angular/core';
import { ServiceProblem } from 'src/app/models/ServiceProblem';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {
  submitted = false;
  ticket: ServiceProblem = new ServiceProblem();
  

  constructor(private ticketsService: TicketsService) { }

  ngOnInit(): void {
  }

  saveTicket(): void {
    this.ticketsService.create(this.ticket).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newTicket(): void {
    this.submitted = false;
    this.ticket = new ServiceProblem();
  }

}
