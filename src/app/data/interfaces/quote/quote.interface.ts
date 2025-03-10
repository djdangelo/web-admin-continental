import {CurrencyInterface} from "../currency/currency.interface";
import {ClientInterface} from "../client/client.interface";
import {TypeInsuranceInterface} from "../type-insurance/type-insurance.interface";

export interface QuoteInterface {
  quoteId?:          number;
  clientId:         number;
  currencyId:       number;
  descriptionAsset: string;
  totalInsurance:   number;
  downPayment:      number;
  rate:             number;
  createAt:         Date;
  status:           boolean;
  currencyEntity?: CurrencyInterface;
  clientEntity?: ClientInterface;
  typeInsuranceEntity: TypeInsuranceInterface;
}
