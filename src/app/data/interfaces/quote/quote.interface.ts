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
}
