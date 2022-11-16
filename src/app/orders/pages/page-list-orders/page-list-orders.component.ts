import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private ordersService: OrdersService, private router: Router) {
    this.ordersService.collection.subscribe((data) => {
      console.log(data);
      this.collection = data;
    });
  }

  ngOnInit(): void {}

  goToEdit(id: number){
    console.log('cliqué');
    // rediriger avec Router
    // orders/edit/id
    this.router.navigate(['orders', 'edit', id])
  }

  // remplacée par le pipe total (dans shared)
  // public total(val: number, coef: number, tva?: number): number{
  //     console.log('déclenché'); // ??? 16
  //     if (tva) return val * coef * (1 + tva / 100);
  //     return val * coef;
  // }
  
}



