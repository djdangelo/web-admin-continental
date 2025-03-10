import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {SharedService} from "../../../../data/services/shared/shared.service";
import {QuoteService} from "../../../../data/services/quote/quote.service";
import {TypeInsuranceService} from "../../../../data/services/type-insurance/type-insurance.service";
import {CurrencyService} from "../../../../data/services/currency/currency.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Message} from "primeng/api";
import {CurrencyInterface} from "../../../../data/interfaces/currency/currency.interface";
import {TypeInsuranceInterface} from "../../../../data/interfaces/type-insurance/type-insurance.interface";
import {QuoteInterface} from "../../../../data/interfaces/quote/quote.interface";

@Component({
  selector: 'app-form-quote',
  standalone: false,
  templateUrl: './form-quote.component.html',
  styleUrl: './form-quote.component.scss'
})
export class FormQuoteComponent {
  action: string[] = ['Create Quote'];
  messages!: Message[];
  btnSave = false;

  listCurrency: CurrencyInterface[] = [];
  listTypeInsurance: TypeInsuranceInterface[] = [];

  formQuote!: FormGroup;

  constructor(
    public sharedService: SharedService,
    public router: Router,
    private quoteService: QuoteService,
    private typeInsuranceService: TypeInsuranceService,
    private currencyService: CurrencyService,
    private formBuilder: FormBuilder,
    ) {
  }
  ngOnInit() {
    this.getCurrency();
    this.getTypeInsurance();
    this.sharedService.showBtnNext = false;
    this.formQuote = this.formBuilder.group({
      clientId: [0, [Validators.required]],
      currencyId: [0, [Validators.required]],
      typeInsuranceId: [0, [Validators.required]],
      descriptionAsset: ['', [Validators.required]],
      totalInsurance: [0, [Validators.required]],
      status: [true, [Validators.required]],
    })
  }
  ngOnDestroy() {
    this.sharedService.showBtnNext = true;
  }

  getCurrency() {
    this.currencyService.list().subscribe(
      (data: CurrencyInterface[]) => {
        this.listCurrency = data;
      },
      error => {
        console.log(error);
        this.messages = [
          { severity: 'error', detail: error.message },
        ]
      }
    )
  }
  getTypeInsurance() {
    this.typeInsuranceService.list().subscribe(
      (data: TypeInsuranceInterface[]) => {
        this.listTypeInsurance = data;
      },
      error => {
        console.log(error);
        this.messages = [
          { severity: 'error', detail: error.message },
        ]
      }
    )
  }

  saveQuote(data: QuoteInterface | any) {
    data.clientId = this.sharedService.selectClient.clientId;
    data.typeInsuranceId = data.typeInsuranceId.typeInsuranceId;
    data.currencyId = data.currencyId.currencyId;
    this.quoteService.create(data).subscribe(
      (data: QuoteInterface) => {
        this.formQuote.reset();
        this.messages = [
          { severity: 'success', detail: 'Cotizacion generada correctamente. Te hemos enviado un correo con la informacion de la prima y porcentaje de la misma.' },
        ]
      },
      error => {
        console.log(error);
        this.messages = [
          { severity: 'error', detail: error.message },
        ]
      }
    );
  }
}
