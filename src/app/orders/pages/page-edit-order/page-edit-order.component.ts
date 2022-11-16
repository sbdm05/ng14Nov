import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent implements OnInit {
  // extraire l'id de l'url
  // appel vers la bdd pour retrouver l'objet concerné par l'id
  // quand on a retrouvé l'objet
  // stocker le retour de l'observable dans un nouvelle variable
  // et l'envoyer à app-form

  public item!: Order;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService,
    private router: Router
  ) {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(typeof id); // ??? number ou autre

    // faire appel au service
    this.ordersService.getItemById(id).subscribe((data) => {
      this.item = data;
      console.log(this.item);
    });
  }

  ngOnInit(): void {}

  onEdit(obj: Order) {
    console.log(obj); // objet modifié ?
    // créer une méthode dans le service pour update
    this.ordersService.update(obj).subscribe(() => {
      // redirection vers orders
      this.router.navigate(['orders']);
    });
  }
}
