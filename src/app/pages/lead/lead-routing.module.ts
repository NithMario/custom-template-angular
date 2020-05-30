import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeadComponent } from './lead-add-new/lead.component';
import { HomeLeadComponent } from './lead-home/lead-home';
import { LeadEditComponent } from './lead-edit/lead-edit.component';
import { LeadViewComponent } from './lead-view/lead-view.component';

const routes: Routes = [
  {
    path: '', component: HomeLeadComponent, data: { title: "Lead" }
  },
  // {
  //   path: 'lead/:id', component: LeadDetailComponent, data: { title: "Lead" }
  // },
  {
    path: 'new-lead', component: LeadComponent, data: { title: 'New Lead' }
  },
  {
    path: 'edit-lead/:leadId', component: LeadEditComponent, data: { title: 'Edit Lead' },
  },
  {
    path: 'view-lead/:leadId', component: LeadViewComponent, data: { title: 'View Lead' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadRoutingModule { }
