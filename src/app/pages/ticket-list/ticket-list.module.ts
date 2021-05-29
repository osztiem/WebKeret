import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TicketListComponent } from './ticket-list.component';



@NgModule({
  declarations: [TicketListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [TicketListComponent]
})
export class TicketListModule { }
