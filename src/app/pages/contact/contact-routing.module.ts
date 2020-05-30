import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { ContactHomeDetailComponent } from './contact-home-detail/contact-home-detail.component';

const routes: Routes = [
  { path:'',component:ContactHomeComponent, data: {title: "Contact"}},
  { path:'contactDetail/:id',component:ContactHomeDetailComponent, data: {title: "Detail Contact"}}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
