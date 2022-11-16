import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

// décorateur
@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent implements OnInit {
  @Input() init!: Order;
  // attention à l'import (pas Stream mais @angular/core)
  @Output() submitted = new EventEmitter<Order>();

  // transformer enum en tableau avec JS
  public states = Object.values(StateOrder);

  // créer une propriété pour le form
  public form!: FormGroup;

  constructor(private fb: FormBuilder) {
    console.log(this.init); // undefined
  }

  ngOnInit(): void {
    console.log(this.init); // ??
    // initialiser les propriétés du form avec this.init
    this.form = this.fb.group({
      tjmHt: [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      state: [this.init.state],
      typePresta: [
        this.init.typePresta,
        [Validators.required, Validators.minLength(4), Validators.maxLength(10)],
      ],
      client: [this.init.client, Validators.required],
      comment: [this.init.comment],
      id: [this.init.id],
    });
  }

  onSubmit() {
    // console.log('cliqué');
    // obtenir l'objet complet
    console.log(this.form.value);
    this.submitted.emit(this.form.value);
  }
}
