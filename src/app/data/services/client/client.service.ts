import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {globalApp} from "../../constants/global.variable.constant";
import {ClientInterface} from "../../interfaces/client/client.interface";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: HttpClient,
  ) { }
  create(data:ClientInterface) {
    return this.http.post<ClientInterface>(`${globalApp.apiUrl}/Client`, data);
  }
  list( page: number, size: number) {
    return this.http.get(`${globalApp.apiUrl}/Client/data?pageNumber=${page}&pagerSize=${size}`);
  }
  update(id: number, data: ClientInterface) {
    return this.http.put<ClientInterface>(`${globalApp.apiUrl}/Client/${id}`, data);
  }
  delete(id: number) {
    return this.http.delete(`${globalApp.apiUrl}/Client/${id}`);
  }
  getOne(id: number) {
    return this.http.get<ClientInterface>(`${globalApp.apiUrl}/Client/${id}`);
  }
}
