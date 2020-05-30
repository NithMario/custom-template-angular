import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunityRoutingModule } from './opportunity-routing.module';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { OpportunityHomeComponent } from './opportunity-router/opportunity-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'app/shared/shared.module';
import { MatchHeightModule } from 'app/shared/directives/match-height.directive';
import { OpportunityDetailComponent } from './opportunity/opportunity-detail/opportunity-detail.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OpportunityLineItemComponent } from './opportunity-line-item/opportunity-line-item.component';

@NgModule({
  declarations: [
    OpportunityComponent,
    OpportunityHomeComponent,
    OpportunityDetailComponent,
    OpportunityLineItemComponent
  ],
  imports: [

    CommonModule,
    FormsModule,
    HttpClientModule,
    OpportunityRoutingModule,
    NgbModule,
    SharedModule,
    MatchHeightModule,
    Ng2SearchPipeModule,
    ModalModule.forRoot()
  ]
})
export class OpportunityModule { }
