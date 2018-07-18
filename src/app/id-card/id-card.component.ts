import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-id-card',
  templateUrl: './id-card.component.html',
  styleUrls: ['./id-card.component.css'],
  providers: [PeopleService]
})
export class IdCardComponent implements OnInit {

  people = [];

  constructor(private _peopleService: PeopleService) {}

  // For button show/hide
  Show = false;

  ngOnInit() {
    this._peopleService.getPeopleData()
      .subscribe(resPeopleData => this.people = resPeopleData);
  }

}
