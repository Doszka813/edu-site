import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleService {

  private dataUrl = 'assets/people.json';

  constructor(private _http: Http) { }

  getPeopleData() {
    return this._http.get(this.dataUrl)
      .map((response: Response) => response.json());
  }
}
