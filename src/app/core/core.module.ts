import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrdersModule } from '../orders/orders.module';
import { TestComponent } from './components/test/test.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [HeaderComponent, NavComponent, FooterComponent, TestComponent],
  imports: [CommonModule, RouterModule],
  exports: [OrdersModule, HeaderComponent, NavComponent, FooterComponent, IconsModule],
})
export class CoreModule {}
