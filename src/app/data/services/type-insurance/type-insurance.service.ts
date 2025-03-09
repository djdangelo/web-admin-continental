import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TypeInsuranceInterface} from "../../interfaces/type-insurance/type-insurance.interface";
import {globalApp} from "../../constants/global.variable.constant";

@Injectable({
  providedIn: 'root'
})
export class TypeInsuranceService {

  constructor(
    private http: HttpClient,
  ) { }
  create(data: TypeInsuranceInterface) {
    return this.http.post<TypeInsuranceInterface>(`${globalApp.apiUrl}/TypeInsurance`, data);
  }
  delete(id: number) {
    return this.http.delete<any>(`${globalApp.apiUrl}/TypeInsurance/${id}`);
  }
  update(id: number, data: TypeInsuranceInterface) {
    return this.http.put<TypeInsuranceInterface>(`${globalApp.apiUrl}/TypeInsurance/${id}`, data);
  }
  list() {
    return this.http.get<TypeInsuranceInterface[]>(`${globalApp.apiUrl}/TypeInsurances`);
  }
}
