import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import {ListClientComponent} from "./pages/list-client/list-client.component";
import {ButtonDirective} from "primeng/button";
import {MessagesModule} from "primeng/messages";
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {Ripple} from "primeng/ripple";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {PaginatorModule} from "primeng/paginator";
import {ReactiveFormsModule} from "@angular/forms";
import {PipesCustomModule} from "../../data/pipes/pipes-custom/pipes-custom.module";
import {CreateClientComponent} from "./pages/create-client/create-client.component";
import {CalendarModule} from "primeng/calendar";


@NgModule({
  declarations: [
    ListClientComponent,
    CreateClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ButtonDirective,
    MessagesModule,
    PipesCustomModule,
    PrimeTemplate,
    Ripple,
    TableModule,
    DropdownModule,
    InputTextModule,
    PaginatorModule,
    ReactiveFormsModule,
    CalendarModule,
  ]
})
export class ClientModule { }
