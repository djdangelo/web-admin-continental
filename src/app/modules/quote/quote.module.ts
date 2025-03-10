import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteRoutingModule } from './quote-routing.module';
import {ListQuoteComponent} from "./pages/list-quote/list-quote.component";
import {CreateQuoteComponent} from "./pages/create-quote/create-quote.component";
import {ButtonDirective} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {MessagesModule} from "primeng/messages";
import {PipesCustomModule} from "../../data/pipes/pipes-custom/pipes-custom.module";
import {PrimeTemplate} from "primeng/api";
import {Ripple} from "primeng/ripple";
import {TableModule} from "primeng/table";
import {FormQuoteComponent} from "./components/form-quote/form-quote.component";
import {StepsModule} from "primeng/steps";
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import {PaginatorModule} from "primeng/paginator";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListQuoteComponent,
    CreateQuoteComponent,
    FormQuoteComponent,
  ],
  imports: [
    CommonModule,
    QuoteRoutingModule,
    ButtonDirective,
    InputTextModule,
    MessagesModule,
    PipesCustomModule,
    PrimeTemplate,
    Ripple,
    TableModule,
    StepsModule,
    CalendarModule,
    DropdownModule,
    PaginatorModule,
    ReactiveFormsModule
  ]
})
export class QuoteModule { }
