import { Component } from '@angular/core';
import {ClientInterface} from "../../../../data/interfaces/client/client.interface";
import {Message} from "primeng/api";
import {Router} from "@angular/router";
import {ClientService} from "../../../../data/services/client/client.service";
import {Table} from "primeng/table";

@Component({
  selector: 'app-list-client',
  standalone: false,
  templateUrl: './list-client.component.html',
  styleUrl: './list-client.component.scss'
})
export class ListClientComponent {
  messages!: Message[];
  listCustomer: ClientInterface[] = [];
  loading: boolean = false;

  pageNumber: number = 0;
  pageSize: number = 0;

  constructor(
    private clientService: ClientService,
    private router: Router,) {
  }
  ngOnInit() {
    this.getListClient(1,10);
  }

  getListClient(pageNumber: number, pageSize: number ) {
    this.clientService.list(pageNumber, pageSize).subscribe(
      (response: ClientInterface[] | any) => {
        this.listCustomer = response;
        this.loading = false;
      },
      (error) => {
        console.error(error);
        this.messages = [
          { severity: 'error', detail: error.message },
        ];
        this.loading = false;
      }
    );
  }
  navigateToFormCustomer() {
    this.router.navigate(['/core/customers/create-customer']);
  }

  navigateToUpdateCustomer(clientId: number) {
    this.router.navigate([`/core/customers/update-customer/${clientId}`]);
  }
  onGlobalFilter(dt: Table, event: Event) {
    dt.filterGlobal((event.target as HTMLInputElement).value, 'contains')
  }

  deleteClient(clientId: number) {
    this.clientService.delete(clientId).subscribe(
      (response: ClientInterface[] | any) => {
        this.messages = [
          { severity: 'success', detail: 'Deleted client is successfully.' },
        ];
        this.getListClient(this.pageNumber, this.pageSize);
      },
      (error) => {
        console.error(error);
        this.messages = [
          { severity: 'error', detail: error.message },
        ];
      }
    )
  }

  loadClients($event: any) {
    this.loading = true;
    this.pageNumber = $event.first / $event.rows + 1; // Calcula el número de página
    this.pageSize = $event.rows;
    console.log(this.pageNumber,this.pageSize);
    this.getListClient(this.pageNumber,this.pageSize);
  }
}
