import { Component, OnInit } from '@angular/core';
import {quickTravelService} from 'src/app/quick-travel.service'
import {Flight} from 'src/app/models/flight'
import { map, filter } from "rxjs/operators";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit{
  title = 'Choose your dream destination...';
  travels : Flight[] = [] ;
  travelsAll : Flight[] = [] ;

  constructor(public quickTravelService: quickTravelService) {
    this.quickTravelService.getTravel().subscribe((data: Flight[]) =>  this.travels = data);
  }
  ngOnInit() {
    console.log("ok");
  }
  // ngOnInit() {
  //   this.travels = this.travelsAll.filter(obj => obj.isDreamDestination === true);
  // }
}
