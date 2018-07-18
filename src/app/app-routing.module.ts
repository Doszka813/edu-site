import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdCardComponent } from './id-card/id-card.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ExpressionsComponent } from './expressions/expressions.component';
const routes: Routes = [
  {path: 'idcard', component: IdCardComponent },
  {path: 'BMI', component: CalculatorComponent },
  {path: 'expressions', component: ExpressionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
