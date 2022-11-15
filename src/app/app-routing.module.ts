import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PageListOrdersComponent } from './orders/pages/page-list-orders/page-list-orders.component';
import { PageNotFoundComponent } from './page-not-found/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  // définir des routes
  // associer une url avec un composant
  // {path: '', component: PageListOrdersComponent}
  { path: '', redirectTo: 'orders', pathMatch: 'full' },
  // situation de Page 404
  // lazy loading = ne pas charger des composants inutiles
  // { path: '**', component: PageNotFoundComponent },
  // wildcard
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    // afficher le tableau de routes accessible avec Router
    console.log(this.router.config, 'tableau de routes');
  }
}
