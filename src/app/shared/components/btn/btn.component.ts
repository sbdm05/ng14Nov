import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent implements OnInit {
  // utiliser une propriété qui vient du parent
  @Input() label!: string;
  @Input() route!: string;
  @Input() styleBtn!: string;

  constructor() {
    console.log(this.label); // ?? undefined
  }

  // hook = crochet = méthodes
  // cycle de vie d'un composant
  ngOnInit(): void {
    console.log(this.label); // ?? undefined
  }

  ngOnChanges(){
    console.log(this.label); // ?? undefined

  }


}
