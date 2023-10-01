import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FlightsSearchComponent} from "./flights/flights-search/flights-search.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'flights-search',
    pathMatch: "full"
  },
  {
    path: 'flights-search',
    component: FlightsSearchComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
