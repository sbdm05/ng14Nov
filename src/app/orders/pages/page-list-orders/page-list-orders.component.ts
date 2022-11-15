import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  // propriété pour stocker les en-têtes du tableau
  public headers: string[] = [
    'Action',
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];

  // propriété pour stocker data
  public collection!: Order[];

  // appel au service = injection de dépendances
  constructor(private ordersService: OrdersService) {
    this.ordersService.collection.subscribe(data => {
      console.log(data);
      this.collection = data;
    });
  }

  ngOnInit(): void {}
}



