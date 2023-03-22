import { RoutersEnum } from './shared/constants/routersEnum';
import { RouterNavigate } from './shared/utils/router-navigate';
import { Component } from '@angular/core';
import { IMenu } from './interfaces/common/IMenu.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-finance-manager';

  menu: IMenu[] = [
    { title: 'transações', path: RoutersEnum.TRANSACTIONS, active: true },
    { title: 'relatórios', path: RoutersEnum.REPORTS, active: false },
    { title: 'ajustes', path: RoutersEnum.SETTINGS, active: true },
  ];

  constructor(private navigateTo: RouterNavigate) {}

  navigateRouter(path: string): void {
    this.navigateTo.navigatePath(path);
  }
}
