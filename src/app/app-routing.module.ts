import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTicketComponent } from './pages/create-ticket/create-ticket.component';
import { EditTicketComponent } from './pages/edit-ticket/edit-ticket.component';
import { HelpComponent } from './pages/help/help.component';
import { TicketListComponent } from './pages/ticket-list/ticket-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'tickets', pathMatch: 'full' },
  { path: 'tickets', component: TicketListComponent },
  { path: 'add', component: CreateTicketComponent },
  { path: 'edit', component: EditTicketComponent},
  { path: 'help', component: HelpComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
