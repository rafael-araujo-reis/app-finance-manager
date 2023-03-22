import { Endpoints } from './../shared/constants/endpoints';
import { ITransactionResponse } from 'src/app/interfaces/transactions/ITransactions.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  constructor(private http: HttpClient) {}

  get listAllTransactions(): Observable<ITransactionResponse> {
    return this.http
      .get<ITransactionResponse>(
        `${Endpoints.URL_BASE}${Endpoints.TRANSACTIONS}${Endpoints.ALL_TRANSACTIONS}`
      )
      .pipe();
  }

  get listTransactionsPending(): Observable<ITransactionResponse> {
    return this.http
      .get<ITransactionResponse>(
        `${Endpoints.URL_BASE}${Endpoints.TRANSACTIONS}${Endpoints.PENDING}`
      )
      .pipe();
  }
}
