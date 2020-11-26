import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { range } from "rxjs";
import { map, filter } from "rxjs/operators";
import {Flight} from "src/app/models/flight"


@Injectable({
  providedIn: 'root'
})
export class quickTravelService {
  protected headers: HttpHeaders = new HttpHeaders();

  constructor(protected httpClient: HttpClient) {
    this.headers = this.headers
      .set('Content-Type', 'application/json; charset UTF-8')
      .set('Authorization', `Bearer ${JSON.parse(localStorage.getItem('connectedUser')).token}`);
  }


  getTravel() {
    var clientHttp = this.httpClient.get(`https://travel-api.clicksomeone.com/destinations`);
    return clientHttp;
  }

}
