import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReportHomeComponent } from './report-lead/report-home.component';
import { ReportSaleComponent } from './report-opportunity/report-sale.component';

const routes:Routes=[
  {path:'',component:ReportHomeComponent,data:{title:"Report"}},
  {path:'report-sale',component:ReportSaleComponent, data:{title:'Sale'}}
]
@NgModule({
  declarations: [],
  imports: [
    // CommonModule
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ReportRoutingModule { }
