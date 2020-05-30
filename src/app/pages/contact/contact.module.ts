import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { ModalModule } from 'ngx-bootstrap';
import { ContactHomeDetailComponent } from './contact-home-detail/contact-home-detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactHomeComponent,
    ContactHomeDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    ContactRoutingModule,
    SharedModule,
    AgGridModule.withComponents([]),
    ModalModule.forRoot()
  ]
})
export class ContactModule { }
