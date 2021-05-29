import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TicketsService } from './services/tickets.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { HighlightDirective } from './shared/highlight.directive';
import { HelpComponent } from './pages/help/help.component';
import { CreateTicketModule } from './pages/create-ticket/create-ticket.module';
import { TicketListModule } from './pages/ticket-list/ticket-list.module';
import { EditTicketModule } from './pages/edit-ticket/edit-ticket.module';


@NgModule({
  declarations: [
    AppComponent,
    
    HighlightDirective,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    CreateTicketModule,
    TicketListModule,
    EditTicketModule
  ],
  providers: [TicketsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
