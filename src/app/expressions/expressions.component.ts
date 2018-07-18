import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expressions',
  templateUrl: './expressions.component.html',
  styleUrls: ['./expressions.component.css']
})
export class ExpressionsComponent implements OnInit {

  public num1: number;
  public num2: number;
  public result: number;

  constructor() { }

  add() {
    this.result = this.num1 + this.num2;
  }

  minus() {
    this.result = this.num1 - this.num2;
  }

  multiply() {
    this.result = this.num1 * this.num2;
  }

  divide() {
    this.result = this.num1 / this.num2;
  }

  ngOnInit() {
  }

}
