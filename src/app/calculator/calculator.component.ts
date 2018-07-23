import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public height: number;
  public weight: number;
  public result: number;
  public risk: string;
  public resultIcon: string;


  // BMI = weight / height in [m] ^ 2
  calculateBmi() {
    if (isNaN(this.weight) || isNaN(this.weight)) {
        return alert;
    }
    this.result = this.weight / Math.pow(this.height / 100, 2);

    // Risk indicator
    switch (true) {
      case(this.result < 18.5):
        this.risk = 'Underweight';
        this.resultIcon = 'far fa-grimace';
        break;
      case(this.result < 24.9 && this.result >= 18.5):
        this.risk = 'Normal';
        this.resultIcon = 'far fa-grin-beam';
        break;
      case(this.result < 29.0 && this.result >= 25.00):
        this.risk = 'Overweight';
        this.resultIcon = 'far fa-grimace';
        break;
      case(this.result < 40.0 && this.result >= 30.00):
        this.risk = 'Obese';
        this.resultIcon = 'far fa-tired';
        break;
      case(this.result >= 40.0 ):
        this.risk = 'Extreme Obese';
        this.resultIcon = 'far fa-sad-cry';
        break;
    }
  }

  constructor() { }

  ngOnInit() {
  }
}
