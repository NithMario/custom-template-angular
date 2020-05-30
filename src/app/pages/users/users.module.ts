import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { UserRolesComponent } from './user-crm/user-roles.component';
import { UserRolesManageComponent } from './user-roles-manage/user-roles-manage.component';
import { MatchHeightModule } from 'app/shared/directives/match-height.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  SharedModule } from 'app/shared/shared.module';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [UserHomeComponent, UserManageComponent, UserRolesComponent, UserRolesManageComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatchHeightModule,
    NgbModule,
    SharedModule,
    ModalModule.forRoot()
  ]
})
export class UsersModule { }
