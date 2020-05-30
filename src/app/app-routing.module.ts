import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

// tslint:disable: quotemark
import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { Full_ROUTES } from "./shared/routes/full-layout.routes";
import { CONTENT_ROUTES } from "./shared/routes/content-layout.routes";

import { AuthGuard } from './shared/auth/auth-guard.service';
import { TestingComponent } from './testing/testing.component';
import { OutputComponent } from './output/output.component';
import { TotalHeaderComponent } from './shared/_components/total-header/total-header.component';
import { LeadComponent } from './pages/lead/lead-add-new/lead.component';
// import { ErrorPageComponent } from './pages/content-pages/error/error-page.component'; 

const appRoutes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full'},  
  { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES },
  {path:'app-total-header',component:TotalHeaderComponent},

  //otherwise redirect to error page
  {
    path: '**',
    redirectTo: 'pages/error'
  },
  {path:'testing',component: TestingComponent},
  {path:'output',component:OutputComponent},
  // {path:'new-lead',component:LeadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
