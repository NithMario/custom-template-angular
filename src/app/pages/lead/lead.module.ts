import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadRoutingModule } from './lead-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { LeadComponent } from './lead-add-new/lead.component';
import { ModalModule } from 'ngx-bootstrap';
import { LeadHomeComponent } from './lead-router/lead-home.component';
import { HomeLeadComponent } from './lead-home/lead-home';
import { LeadEditComponent } from './lead-edit/lead-edit.component';
import { LeadViewComponent } from './lead-view/lead-view.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    HomeLeadComponent,
    LeadHomeComponent,
    LeadComponent,
    LeadEditComponent,
    LeadViewComponent,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    LeadRoutingModule,
    SharedModule,
    AgGridModule.withComponents([]),
    ModalModule.forRoot(),
    NgxSpinnerModule,
    
  ]
})
export class LeadModule { }
