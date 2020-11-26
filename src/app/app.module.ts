import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { HttpClientModule } from '@angular/common/http';
import { map, filter } from "rxjs/operators";
import { BilletsComponent } from './billets/billets.component';
import { DestinationComponent } from './destination/destination.component';



@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    BilletsComponent,
    DestinationComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
