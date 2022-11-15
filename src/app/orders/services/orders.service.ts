import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';

// décorateur accessibla grâce à providedIn
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  // on ajoute le * pour les observables
  private collection$!: Observable<Order[]>;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>('http://localhost:5005/orders');
  }

  // getter =  propriété
  // this.service.collection.subscribe()
  get collection(): Observable<Order[]>{
    // retourner une valeur
    return this.collection$;
  }

  // setter
  set collection(col: Observable<Order[]>){
    // donner une valeur à une propriété
    this.collection$ = col
  }


}
