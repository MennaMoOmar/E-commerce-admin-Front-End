import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router'

import{AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component'
import{AdminOrderDetailsComponent} from './components/admin-order-details/admin-order-details.component'

const  routes : Routes = [
  {path:'', component:AdminDashboardComponent},
  {path:'admin', component:AdminDashboardComponent},
  {path:'details', component:AdminOrderDetailsComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
