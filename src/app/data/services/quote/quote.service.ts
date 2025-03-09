import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {QuoteInterface} from "../../interfaces/quote/quote.interface";
import {globalApp} from "../../constants/global.variable.constant";

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(
    private http: HttpClient,
  ) { }
  create(data: QuoteInterface) {
    this.http.post<QuoteInterface>(`${globalApp.apiUrl}/Quote`, data);
  }
  delete(id: number) {
    return this.http.delete<QuoteInterface>(`${globalApp.apiUrl}/Quote/${id}`);
  }
  update(id: number, data: QuoteInterface) {
    return this.http.put<QuoteInterface>(`${globalApp.apiUrl}/Quote/${id}`, data);
  }
  list(page: number = 1, size: number = 10) {
    this.http.get<QuoteInterface[]>(`${globalApp.apiUrl}/Quote/data?pageNumber=${page}&pagerSize=${size}`);
  }
}
