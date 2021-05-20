import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ServiceProblem } from 'src/app/models/ServiceProblem';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit, OnChanges {

  @Input() ticket?: ServiceProblem;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentTicket: ServiceProblem = {
    status: '',
    description: '',
    category: ''
  };
  message = '';

  constructor(private ticketsService: TicketsService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentTicket = { ...this.ticket };
  }

  updateTutorial(): void {
    const data = {
      category: this.currentTicket.category,
      description: this.currentTicket.description,
      status: this.currentTicket.status
    };

    if (this.currentTicket.id) {
      this.ticketsService.update(this.currentTicket.id, data)
        .then(() => this.message = 'The tutorial was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteTutorial(): void {
    if (this.currentTicket.id) {
      this.ticketsService.delete(this.currentTicket.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }

}