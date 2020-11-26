import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BilletsComponent } from 'src/app/billets/billets.component';
import { DestinationComponent } from 'src/app/destination/destination.component';

const routes: Routes = [
  { path: 'billets', component: BilletsComponent },
  { path: '', component: DestinationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
