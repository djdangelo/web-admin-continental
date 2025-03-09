import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import {AppLayoutModule} from "../layout/app.layout.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    AppLayoutModule
  ]
})
export class ModulesModule { }
