import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {SharedService} from "../../../../data/services/shared/shared.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-quote',
  standalone: false,
  templateUrl: './create-quote.component.html',
  styleUrl: './create-quote.component.scss'
})
export class CreateQuoteComponent {
  itemsMenu: MenuItem[] = [];
  constructor(
    public sharedService: SharedService,
    public router: Router,
    ) { }
  ngOnInit() {
    this.sharedService.showBtnNewClient = false;
    this.sharedService.showBtnDelete = false;
    this.sharedService.showBtnUpdate = false;
    this.itemsMenu = [
      { label: 'Seleccione cliente', routerLink: 'select-client',},
      { label: 'Generar cotizacion', routerLink: 'form-quote', },
    ]
  }
  ngOnDestroy() {
    this.sharedService.showBtnNewClient = true;
    this.sharedService.showBtnDelete = true;
    this.sharedService.showBtnUpdate = true;
  }

  nextStep() {
    this.sharedService.showBtnNext = false;
    this.router.navigate(['/core/quotes/create-quote/form-quote']);
  }
}
