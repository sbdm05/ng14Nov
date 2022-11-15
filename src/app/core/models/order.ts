import { StateOrder } from '../enums/state-order';
import { OrderI } from '../interfaces/order-i';

export class Order implements OrderI {
  tjmHt = 1200;
  nbJours = 1;
  tva = 20;
  state = StateOrder.OPTION;
  typePresta!: string;
  client!: string;
  comment!: string;
  id!: number;
  constructor(obj?: Partial<Order>) {
    if (obj) {
      // prendre les nouvelles valeurs et les assigner à l'objet this
      // javascript
      Object.assign(this, obj);
    }
  }
}
// new Order()
