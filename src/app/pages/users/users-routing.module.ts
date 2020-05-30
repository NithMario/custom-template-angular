import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { UserRolesComponent } from './user-crm/user-roles.component';
import { UserRolesManageComponent } from './user-roles-manage/user-roles-manage.component';
import { ModalModule } from 'ngx-bootstrap';

const routes: Routes = [
  {
    path: '',     
    children: [
      {
        path: 'list',
        component: UserHomeComponent,
        data: {
          title: 'User Home'
        }
      },
      // {
      //   path: 'e',
      //   component: UserManageComponent,
      //   data: {
      //     title: 'User Manage'
      //   }
      // },
      // {
      //   path: 'e/:id',
      //   component: UserManageComponent,
      //   data: {
      //     title: 'User Manage'
      //   }
      // },     
      {
        path: 'roles/list',
        component: UserRolesComponent,
        data: {
          title: "User Roles"
        }
      },
      // {
      //   path: 'roles/e',
      //   component: UserRolesManageComponent,
      //   data: {
      //     title: "Manage User Role"
      //   }
      // },
      // {
      //   path: "roles/e/:id",
      //   component: UserRolesManageComponent,
      //   data: {
      //     title: "Manage User Role"
      //   }
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  ModalModule.forRoot()
  
  ],

  exports: [RouterModule]
})
export class UsersRoutingModule { }
