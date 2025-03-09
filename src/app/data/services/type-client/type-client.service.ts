import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TypeClientInterface} from "../../interfaces/type-client/type-client.interface";
import {globalApp} from "../../constants/global.variable.constant";

@Injectable({
  providedIn: 'root'
})
export class TypeClientService {

  constructor(
    private http: HttpClient
  ) { }

  list() {
     return this.http.get<TypeClientInterface[]>(`${globalApp.apiUrl}/TypeClient`);
  }
  create(data: TypeClientInterface) {
    return this.http.post<TypeClientInterface>(`${globalApp.apiUrl}/TypeClient`, data);
  }
  update(id: number, data: TypeClientInterface) {
    return this.http.put<TypeClientInterface>(`${globalApp.apiUrl}/TypeClient/${id}`, data);
  }
  delete(id: number) {
    return this.http.delete<any>(`${globalApp.apiUrl}/TypeClient/${id}`);
  }
}
