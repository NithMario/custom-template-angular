import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { AssignedHomeComponent } from './assigned-home/assigned-home.component';

const routes:Routes=[
  {path:'',component:AssignedHomeComponent, data:{title:"Assigned"}}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
    // CommonModule
  
})
export class AssignedRoutingModule { }
