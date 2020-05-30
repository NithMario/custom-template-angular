import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CompanyHomeComponent } from './company-home/company-home.component';
import { CompanyHomeDetailComponent } from './company-home-detail/company-home-detail.component';

const routes:Routes=[
  {path:'',component:CompanyHomeComponent, data:{title:"Company"}},
  {path:'detailCompany/:id',component:CompanyHomeDetailComponent, data:{title:"Detail Company"}},
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class CompanyRoutingModule { }
