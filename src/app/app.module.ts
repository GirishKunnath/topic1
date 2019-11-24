import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomCurrencyPipe } from './_pipes/custom-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomCurrencyPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
