import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { OpportunityDetailComponent } from './opportunity/opportunity-detail/opportunity-detail.component';
import { ModalModule } from 'ngx-bootstrap';
import { OpportunityLineItemComponent } from './opportunity-line-item/opportunity-line-item.component';



const routes:Routes=[
  {
    path:'',component:OpportunityComponent
  },
  {
    path:'detailOpp/:id',component:OpportunityDetailComponent,data:{title:'detail opportunity'}
  },
  {
    path:'detailOpp/lineItem/:id',component:OpportunityLineItemComponent,data:{title:'Opportunity Line Item'}
  },
  
  

  
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ModalModule.forRoot()
  ],
  exports:[RouterModule]
})
export class OpportunityRoutingModule { }
