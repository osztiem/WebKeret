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

  getAll(): AngularFirestoreCollection<ServiceProblem> {
    return this.ticketsRef;
  }

  create(ticket: ServiceProblem): any {
    return this.ticketsRef.add({ ...ticket });
  }

  update(id: string, data: any): Promise<void> {
    return this.ticketsRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.ticketsRef.doc(id).delete();
  }
}
