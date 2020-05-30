import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductHomeComponent } from './product-home/product-home.component';
import { AddProductComponent } from './product-home/add-product/add-product.component';
import { ModalModule } from 'ngx-bootstrap';
import { ProductHomeDetailComponent } from './product-home/product-home-detail/product-home-detail.component';

const routes:Routes=[
  {path:'',component:ProductHomeComponent,data:{title:'Product Home'}},
  {path:'add',component:AddProductComponent,data:{title:'Add Product'}},
  {path:'detailProduct/:id',component:ProductHomeDetailComponent,data:{title:'Home Detail Of Product'}}

]

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ModalModule.forRoot()
  ],
  exports:[RouterModule]
})
export class ProductRoutingModule { }
