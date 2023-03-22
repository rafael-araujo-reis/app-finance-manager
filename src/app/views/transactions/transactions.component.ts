import { TransactionsService } from './../../services/transactions.service';
import { Component, OnInit } from '@angular/core';
import {
  ITransaction,
  ITransactionResponse,
} from 'src/app/interfaces/transactions/ITransactions.interface';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  transactions!: ITransaction[];
  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.getTransactions();
  }

  private getTransactions(): void {
    this.transactionsService.listAllTransactions.subscribe(
      (transactions: ITransactionResponse): void =>
        this.updateListTransactions(transactions)
    );
  }

  private updateListTransactions(transactions: ITransactionResponse): void {
    this.transactions = transactions.data;
  }
}
