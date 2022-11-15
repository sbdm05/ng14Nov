import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BtnComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BtnComponent
  ]
})
export class SharedModule { }
