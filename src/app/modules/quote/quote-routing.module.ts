import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListQuoteComponent} from "./pages/list-quote/list-quote.component";
import {CreateQuoteComponent} from "./pages/create-quote/create-quote.component";
import {ListClientComponent} from "../client/pages/list-client/list-client.component";
import {FormQuoteComponent} from "./components/form-quote/form-quote.component";

let routes: Routes;
routes = [
  {path: 'list-quote', data: {breadcrumb: 'Lista de cotizaciones'}, component: ListQuoteComponent, pathMatch: 'full'},
  {
    path: 'create-quote',
    data: {breadcrumb: 'Nueva cotizacion'},
    component: CreateQuoteComponent,
    children: [
      {path: '', redirectTo: 'select-client', pathMatch: 'full'},
      {path: 'select-client', component: ListClientComponent, pathMatch: 'full'},
      {path: 'form-quote', component: FormQuoteComponent, pathMatch: 'full'},
    ]
  },
  {path: '', redirectTo: 'list-quote', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteRoutingModule { }
