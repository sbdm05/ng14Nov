import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  // si la route est orders alors on affiche PageListOrders
  { path: 'orders', component: PageListOrdersComponent },
  { path: 'orders/add', component: PageAddOrderComponent },
  { path: 'orders/edit', component: PageEditOrderComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
