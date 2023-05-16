import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { SettingsComponent } from './views/settings/settings.component';
import { ReportsComponent } from './views/reports/reports.component';
import { TransactionsComponent } from './views/transactions/transactions.component';
import { LoginComponent } from './views/login/login.component';
import { RoutersEnum } from './shared/constants/routersEnum';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutersEnum.TRANSACTIONS,
    pathMatch: 'full',
  },
  {
    path: RoutersEnum.TRANSACTIONS,
    component: TransactionsComponent,
  },
  {
    path: RoutersEnum.REPORTS,
    component: ReportsComponent,
  },
  {
    path: RoutersEnum.SETTINGS,
    component: SettingsComponent,
  },
  {
    path: RoutersEnum.LOGIN,
    component: LoginComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
