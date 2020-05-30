import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'app/shared/_models/model-product';
import { HttpClient } from '@angular/common/http';
import { RestApiService } from 'app/shared/services/rest-api.service';

@Component({
  selector: 'app-product-home-detail',
  templateUrl: './product-home-detail.component.html',
  styleUrls: ['./product-home-detail.component.scss']
})
export class ProductHomeDetailComponent implements OnInit {
  product=new Product();
  id:any;
  constructor(
    private route:Router,
    private http:HttpClient,
    private restApiService:RestApiService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      this.id = res.id;
      console.log(this.id)
    })
    this.getProducts();
  } 
  onCancel(){
    this.route.navigate(['/product'])
  }
  dataProducts:any;
  getProducts(){
    this.restApiService.getByPath('/product/'+this.id,{}).subscribe(res=>{
      this.product=res;
      console.log(this.product)
    })
  }

}
