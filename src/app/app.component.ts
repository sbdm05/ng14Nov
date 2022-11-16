import { Component } from '@angular/core';

// décorateur - méta datas
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'crm';

  public open: boolean = true;

  // toutes les propriétés et méthodes
  public onClick() {
    // alterner la valeur de open
    this.open = !this.open;
    console.log(this.open); // true false, true, false
  }
}
