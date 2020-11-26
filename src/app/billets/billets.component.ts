import { Component, OnInit } from '@angular/core';
import {Ticket} from 'src/app/models/ticket'
import {quickTravelService} from 'src/app/quick-travel.service'
import {ActivatedRoute} from '@angular/router'
import { map, filter } from "rxjs/operators";

@Component({
  selector: 'app-billets',
  templateUrl: './billets.component.html',
  styleUrls: ['./billets.component.scss']
})
export class BilletsComponent implements OnInit {
  to: string;

  constructor(public quickTravelService: quickTravelService,private route: ActivatedRoute) {

    this.route.queryParams.subscribe(params => {
      this.to = params['where'];
  });
   }
  tickets : Ticket[] = [] ;
   parameter: any;

  ngOnInit() {

    //regular call to the api
    //this.quickTravelService.getticket().subscribe((data: Ticket[]) =>  this.tickets = data);

    //my best try to rxjs
    // this.quickTravelService.getticket().pipe( map(tickets => tickets.filter(ticket => ticket.to == this.to))
    // ).subscribe(tickets => this.tickets = tickets);
  }

}
