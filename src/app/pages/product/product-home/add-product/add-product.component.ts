import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'app/shared/_models/model-product';
import { RestApiService } from 'app/shared/services/rest-api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product= new Product();
  constructor(private route:Router,private restApiService:RestApiService){ }

  ngOnInit() {
  }

  onCancel(){
    this.route.navigate(['/product']);
  }
  onSave(){
  this.restApiService.postByPath('/createproduct',this.product).subscribe(res=>{
    console.log(this.product.name);
  })
  this.route.navigate(['product']);
  }


}
