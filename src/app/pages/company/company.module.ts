import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyHomeComponent } from './company-home/company-home.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyNewComponent } from './company-new/company-new.component';
import { ModalModule } from 'ngx-bootstrap';
import { CompanyHomeDetailComponent } from './company-home-detail/company-home-detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CompanyHomeComponent, CompanyNewComponent, CompanyHomeDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    CompanyRoutingModule,
    ModalModule.forRoot()
  ]
})
export class CompanyModule { }
