import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDashboardRoutingModule } from './home-dashboard-routing.module';
import { HomeDbComponent } from './home-db/home-db.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [HomeDbComponent],
  imports: [
    CommonModule,
    HomeDashboardRoutingModule,
    ChartsModule
  ]
})
export class HomeDashboardModule { }
