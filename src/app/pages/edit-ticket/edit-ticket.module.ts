import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTicketComponent } from './edit-ticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [EditTicketComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [EditTicketComponent]
})
export class EditTicketModule { }
