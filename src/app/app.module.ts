import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TicketListComponent } from './pages/ticket-list/ticket-list.component';
import { TicketsService } from './services/tickets.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { HighlightDirective } from './shared/highlight.directive';
import { HelpComponent } from './pages/help/help.component';


@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    HighlightDirective,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [TicketsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
