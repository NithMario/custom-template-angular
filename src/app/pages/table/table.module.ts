import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTableComponent } from './home-table/home-table.component';
import { TableRoutingModule } from './table-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from 'app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeTableComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([
     ])
  ]
})
export class TableModule { }
