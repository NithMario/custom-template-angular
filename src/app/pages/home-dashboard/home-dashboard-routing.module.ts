import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDbComponent } from './home-db/home-db.component';

const routes: Routes = [
  {
    path: '', component: HomeDbComponent, data: { title: 'Home' }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeDashboardRoutingModule { }
