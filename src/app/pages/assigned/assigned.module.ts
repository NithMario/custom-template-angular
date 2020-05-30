import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignedRoutingModule } from './assigned-routing.module';
import { AssignedHomeComponent } from './assigned-home/assigned-home.component';


@NgModule({
  declarations: [
    AssignedHomeComponent
  ],
  imports: [
    CommonModule,
    AssignedRoutingModule
  ]
})
export class AssignedModule { }
