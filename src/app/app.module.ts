import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { IdCardComponent } from './id-card/id-card.component';
import { ExpressionsComponent } from './expressions/expressions.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    IdCardComponent,
    ExpressionsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
