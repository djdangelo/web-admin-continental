import { Component } from '@angular/core';
import {Message} from "primeng/api";
import {QuoteInterface} from "../../../../data/interfaces/quote/quote.interface";
import {Router} from "@angular/router";
import {QuoteService} from "../../../../data/services/quote/quote.service";
import {Table} from "primeng/table";

@Component({
  selector: 'app-list-quote',
  standalone: false,
  templateUrl: './list-quote.component.html',
  styleUrl: './list-quote.component.scss'
})
export class ListQuoteComponent {
  messages!: Message[];
  listQuote: QuoteInterface[] = [];
  loading: boolean = false;

  pageNumber: number = 0;
  pageSize: number = 0;

  constructor(
    private quoteService: QuoteService,
    private router: Router) {
  }

  ngOnInit() {
    this.getListQuote(1,10);
  }

  onGlobalFilter(dt: Table, event: Event) {
    dt.filterGlobal((event.target as HTMLInputElement).value, 'contains')
  }

  getListQuote(pageNumber: number, pageSize: number) {
    this.quoteService.list(pageNumber, pageSize).subscribe(
      (response: QuoteInterface[]) => {
        this.listQuote = response;
        this.loading = false;
      },
      error => {
        console.log(error);
        this.messages = [
          { severity: 'error', detail: error.message },
        ];
        this.loading = false;
      }
    );
  }
  loadQuote($event: any) {
    this.loading = true;
    this.pageNumber = $event.first / $event.rows + 1;
    this.pageSize = $event.rows;
    console.log(this.pageNumber,this.pageSize);
    this.getListQuote(this.pageNumber,this.pageSize);
  }

  navigateToFormQuote() {
    this.router.navigate(['/core/quotes/create-quote']);
  }
}
