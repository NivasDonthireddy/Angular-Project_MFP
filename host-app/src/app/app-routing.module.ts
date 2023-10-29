import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: 'landing',
    loadComponent: () => import("remote-app/LandingComponent").then(m => m.LandingComponent),
    pathMatch: 'full'
  },
  {
    path: 'flights',
    loadChildren: () => import("remote-app/FlightsModule").then(m => m.FlightsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
