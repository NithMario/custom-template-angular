import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from 'app/shared/_models/model-product';
import { RestApiService } from 'app/shared/services/rest-api.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import {ProductService} from 'app/shared/services/_objects/product.service';
@Component({
  selector: 'app-opportunity-line-item',
  templateUrl: './opportunity-line-item.component.html',
  styleUrls: ['./opportunity-line-item.component.scss']
})
export class OpportunityLineItemComponent implements OnInit {
  product = new Product();
  products : any =[];
  searchText:any;
  mCreateItem: BsModalRef;
  updateId:any;
  constructor(
    private route:Router,
    private http:HttpClient,
    private restApiService:RestApiService,
    private modalService: BsModalService,
    private activateRoute: ActivatedRoute,
    private $productServices:ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
    this.activateRoute.params.subscribe(res=>{
      console.log('get====>',res);
      this.updateId = res.id;
    })




  }
  onCancel(){
    this.route.navigate(['/opportunity']);
  }
  onOrder( view: TemplateRef<any>) {
   
    this.mCreateItem = this.modalService.show(view, Object.assign({}, { class: 'gray modal-lg' }));
    this.restApiService.getByPath('/product',this.product).subscribe(res=>{
      this.product = res;
      console.log('Test get proct....',this.product.category);
    })
  }


  getProducts(){
    this.restApiService.getByPath('/product', this.product).subscribe(res => {
      this.products = res;
    });
  }
  createItemSave() {
    console.log(this.updateId);
    this.restApiService.postByPath('/createopportunity_line_item/'+this.updateId, this.product).subscribe(res =>console.log(res));
  }
  onChange(event) {
    console.log(event.target.value);
    let record_name = {
      name: event.target.value
    }
    this.$productServices.get(record_name).subscribe(res => {
      let result = this.findWithAttr(res, 'name', record_name.name); // returns 0
      console.log(res[result].id);
      this.product.product_id = res[result].id;
    });
  }

   findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}
}
