import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StatusPipe} from "../status/status.pipe";



@NgModule({
  declarations: [
    StatusPipe,
  ],
  imports: [
    CommonModule
  ], exports: [
    StatusPipe,
  ]
})
export class PipesCustomModule { }
