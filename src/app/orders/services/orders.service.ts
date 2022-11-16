import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

// décorateur accessibla grâce à providedIn
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  // on ajoute le * pour les observables
  private collection$!: Observable<Order[]>;

  // On récupère l'url stockée dans environment
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    // pour utiliser les backticks, touche altGr7
    // template strings = template literals
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`);
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

  // méthode post
  // observable => this.ordersService.add(item).subscribe()
  public add(item: Order): Observable<Order>{
    return this.http.post<Order>(`${this.urlApi}/orders`, item);
  }

  // méthode pour retrouver un élément par son id
  public getItemById(id: number): Observable<Order>{
    return this.http.get<Order>(`${this.urlApi}/orders/${id}`);
  }

  // méthode pour modifier l'objet
  public update(obj: Order): Observable<Order>{
    return this.http.put<Order>(`${this.urlApi}/orders/${obj.id}`, obj);
  }


}
