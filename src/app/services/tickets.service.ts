import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ServiceProblem } from '../models/ServiceProblem';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private dbPath = '/tickets';

  ticketsRef: AngularFirestoreCollection<ServiceProblem>;

  constructor(private db: AngularFirestore) {
    this.ticketsRef = db.collection(this.dbPath);

    
  }
  getTickets() { 
    return this.db.collection("tickets").snapshotChanges();
  }

  getAll(): AngularFirestoreCollection<ServiceProblem> {
    return this.ticketsRef;
  }

  create(ticket: ServiceProblem): any {
    return this.ticketsRef.add({ ...ticket });
  }

  update(id: string, data: any): Promise<void> {
    /*return this.ticketsRef.doc(id).update(data);*/
    return this.db
    .collection("tickets")
    .doc(data.payload.doc.id)
    .set({ completed: true }, { merge: true });
  }

  delete(id: string): Promise<void> {
    return this.ticketsRef.doc(id).delete();
  }

  createTicket(data) {
    return new Promise<any>((resolve, reject) =>{
        this.db
            .collection("tickets")
            .add(data)
            .then(res => {}, err => reject(err));
    });
}

}
