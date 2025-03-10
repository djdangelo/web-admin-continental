import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppLayoutComponent} from "../layout/app.layout.component";

const routes: Routes = [
  { path: '', component: AppLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'customers', data: { breadcrumb: 'Clientes' }, loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
      { path: 'quotes', data: { breadcrumb: 'Cotizaciones' }, loadChildren: () => import('./quote/quote.module').then(m => m.QuoteModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
