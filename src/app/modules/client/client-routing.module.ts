import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListClientComponent} from "./pages/list-client/list-client.component";
import {CreateClientComponent} from "./pages/create-client/create-client.component";

const routes: Routes = [
  { path: 'list-customer',data: { breadcrumb: 'Lista de clientes' }, component: ListClientComponent, pathMatch: 'full' },
  { path: 'create-customer', data: { breadcrumb: 'Crear nuevo cliente' }, component: CreateClientComponent, pathMatch: 'full' },
  { path: 'update-customer/:id', data: { breadcrumb: 'Actualizar cliente' }, component: CreateClientComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'list-customer', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
