import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CurrencyInterface} from "../../interfaces/currency/currency.interface";
import {globalApp} from "../../constants/global.variable.constant";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(
    private http: HttpClient,
  ) { }
  create(data: CurrencyInterface) {
    this.http.post<CurrencyInterface>(`${globalApp.apiUrl}/Currency`, data);
  }
  list() {
    return this.http.get<CurrencyInterface[]>(`${globalApp.apiUrl}/Currency/`);
  }
  update(id: number, data: CurrencyInterface) {
    return this.http.put<CurrencyInterface>(`${globalApp.apiUrl}/Currency/`, data);
  }
  delete(id: number) {
    return this.http.delete<CurrencyInterface>(`${globalApp.apiUrl}/Currency/${id}`);
  }
}
