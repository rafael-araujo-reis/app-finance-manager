import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions/transactions.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    TransactionsComponent,
    ReportsComponent,
    SettingsComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, MatIconModule],
})
export class ViewsModule {}
