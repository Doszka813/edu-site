import { Component } from '@angular/core';
import { Person } from './person';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [PeopleService]
})
export class AppComponent {
  title = 'app';
  people: Array<Person>;

  constructor() {
  }


}
