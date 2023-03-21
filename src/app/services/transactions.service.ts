import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  transactions: any;

  url: string = 'http://localhost:3200/transactions/all-transactions';
  // url: string = 'http://localhost:3200/transactions/pending';
  constructor(private http: HttpClient) {}

  get listTransactions(): Observable<any> {
    return this.http.get<any>(this.url).pipe();
  }
}
