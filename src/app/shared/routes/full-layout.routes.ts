import { Routes, RouterModule } from '@angular/router';
import { ProductModule } from 'app/pages/product/product.module';


//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [ 
  {
    path: 'home',
    loadChildren: 'app/pages/home-dashboard/home-dashboard.module#HomeDashboardModule'
  },
  {
    path: 'lead',
    loadChildren: "app/pages/lead/lead.module#LeadModule"
  },
  {
    path: 'owner',
    loadChildren: "app/pages/assigned/assigned.module#AssignedModule"
    // AssignedModule
  },
  {
    path:'opportunity',
    loadChildren:"app/pages/opportunity/opportunity.module#OpportunityModule"
  },
  {
    path:'product',
    loadChildren:"app/pages/product/product.module#ProductModule"
  },
  {
    path:'company',
    loadChildren:"app/pages/company/company.module#CompanyModule"
  },
  {
    path:'contact',
    loadChildren:"app/pages/contact/contact.module#ContactModule"
  },
  
  {
    path: 'report',
    loadChildren: "app/pages/report/report.module#ReportModule"
    // ReportModule
  },
  {
    path: 'users',
    loadChildren: "app/pages/users/users.module#UsersModule"
  },
  
  {
    path: 'table',
    loadChildren: "app/pages/table/table.module#TableModule"
  },
  
  
  





];