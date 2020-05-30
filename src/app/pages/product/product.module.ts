import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductHomeComponent } from './product-home/product-home.component';
import { AddProductComponent } from './product-home/add-product/add-product.component';
import { ProductComponent } from './product-router/product.component';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { ProductHomeDetailComponent } from './product-home/product-home-detail/product-home-detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    ProductHomeComponent,
    AddProductComponent,
    ProductComponent,
    ProductHomeDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    ProductRoutingModule,
    ModalModule.forRoot()
  ]
})
export class ProductModule { }
