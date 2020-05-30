import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTableComponent } from './home-table/home-table.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component:HomeTableComponent, data: { title: "Table"} }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule]
})
export class TableRoutingModule { }
