import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Product } from 'app/shared/_models/model-product';
import { RestApiService } from 'app/shared/services/rest-api.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss']
})
export class ProductHomeComponent implements OnInit {
  modalRef: BsModalRef;
  product = new Product();
  eProduct : any ={};
  productArray: any = [];
  id: any;
  searchText;
  dataProducts: any;

  constructor(
    private route: Router,
    private modalService: BsModalService,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private restApiService: RestApiService

  ) { }
  ngOnInit() {

    this.activatedRoute.params.subscribe(paramId => {
      this.id = paramId;
      console.log(' pId', this.id);
    })

    this.getProduct();
  }

  onCancel() {
    this.route.navigate(['lead']);
  }
  onAdd() {
    this.route.navigate(['product/add']);
  }
  onEdit(edit,id) {
    this.id=id;
    this.modalRef = this.modalService.show(edit, Object.assign({}, { class: 'gray modal-lg' }));
    this.restApiService.getByPath('/product/' + id,{}).subscribe(res => {
      this.eProduct = res;
    })
  }
  onSave() {
    this.restApiService.postByPath('/createproduct/'+this.id, this.eProduct).subscribe(res => {
      this.modalRef.hide();
      this.getProduct();
    })
  }
  onSaveNew(){
    this.restApiService.postByPath('/createproduct',this.eProduct).subscribe(res=>{
      this.modalRef.hide();
      this.getProduct();
    })
  }

  onView(view) {
    // this.route.navigate(['product/detailProduct']);
  }
  onDelete(id) {
    if (confirm("Are you sure to delete record id: " + id + "?")) {
      this.restApiService.deleteByPath('/deleteproduct/' + id).subscribe(res => {
        this.getProduct();
        console.log(res);
      })
      


    }
  }

  // Group of method get json 
  getProduct() {
    this.restApiService.getByPath('/product', this.product).subscribe(res => {
      console.log('product', res);
      this.productArray = res;
    })
  }

}
