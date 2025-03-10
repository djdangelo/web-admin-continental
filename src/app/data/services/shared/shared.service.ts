import { Injectable } from '@angular/core';
import {ClientInterface} from "../../interfaces/client/client.interface";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  showBtnUpdate = true;
  showBtnDelete = true;
  showBtnNewClient = true;

  showBtnNext = true;

  selectClient!: ClientInterface;
  constructor() { }
}
