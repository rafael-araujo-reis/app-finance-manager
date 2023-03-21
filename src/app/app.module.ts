import { ComponentsModule } from './shared/components/components.module';
import { ViewsModule } from './views/views.module';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {
  NgModule,
  NO_ERRORS_SCHEMA,
  DEFAULT_CURRENCY_CODE,
  LOCALE_ID,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    ViewsModule,
    MatIconModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent],
  exports: [ComponentsModule, ViewsModule, MatIconModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
