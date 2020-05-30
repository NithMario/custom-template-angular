import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportRoutingModule } from './report-routing.module';

import { ReportHomeComponent } from './report-lead/report-home.component';
import { ReportSaleComponent } from './report-opportunity/report-sale.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ReportHomeComponent,
    ReportSaleComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ]
})
export class ReportModule { }
