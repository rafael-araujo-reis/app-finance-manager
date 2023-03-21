import { TransactionsService } from './../../services/transactions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  transactions: any;
  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.getTransactions();
  }

  private async getTransactions() {
    await this.transactionsService.listTransactions.subscribe(
      (transactions: any) => this.updateListTransactions(transactions)
    );
    console.log(this.transactions);
  }

  private updateListTransactions(transactions: any) {
    this.transactions = transactions;
  }
}
