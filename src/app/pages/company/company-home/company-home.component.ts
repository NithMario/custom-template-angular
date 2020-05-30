import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Leads } from 'app/shared/_models/model-lead';
import { RestApiService } from 'app/shared/services/rest-api.service';
import * as alertFunctions from '../../../shared/data/sweet-alerts';


@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.scss']
})
export class CompanyHomeComponent implements OnInit {
  nCompany:any = {};
  eCompany:any = {};
  searchText;
  dataCompanys: any;
  oCompany: any;
  modalRef: BsModalRef;
   updateId:number;
  constructor(
    private route: Router,
    private modalService: BsModalService,
    private http: HttpClient,
    private restApiService:RestApiService
  ) { }

  ngOnInit() {
    this.getCompany();
  }
  onNew(news) {
    this.modalRef = this.modalService.show(news, Object.assign({}, { class: 'gray modal-lg' }));
    console.log('nLead', this.dataCompanys)
  }
  onCancel() {
    this.route.navigate(['/lead']);
  }
  onView() {
    // this.route.navigate(['company/detailCompany'])
  }
  onEdit(edit,id) {
    this.updateId = id;
    this.modalRef = this.modalService.show(edit, Object.assign({}, { class: 'gray modal-lg' }));
  console.log('id',id);
  this.restApiService.getByPath('/company/'+id,{}).subscribe(res=>{
    this.eCompany = res;
   
  })
  }
  onDelete(Company: any) {
   

  }
  saveCompany() {
  
    this.restApiService.postByPath('/createcompany',this.nCompany).subscribe(res=>{
      console.log('result Success',res);
      this.modalRef.hide();
      this.getCompany();
    })

  }
  confirmCancelButton(id:number){
  this.http.delete('http://127.0.0.1:8000/api/deletecompany/'+id).subscribe(res=>{
    console.log('deleted',res);
    this.updateId = id;
    console.log('updateID',this.updateId);
  })
  this.getCompany();
//  alertFunctions.confirmCancelButton();

 
  }
  //on Save Modal Edit 
  doSave(){
   console.log(this.updateId);
    this.restApiService.postByPath('/updatecompany/'+this.updateId,this.eCompany).subscribe(res=>{
      this.modalRef.hide();
      this.getCompany();
      console.log('result Success',res);
    })
  }
  doSaveNew(){
    this.restApiService.postByPath('/createcompany',this.eCompany).subscribe(res=>{
      console.log('result Success',res);
      this.modalRef.hide();
      this.getCompany();
    })

  }

  getCompany() {
    return  this.restApiService.getByPath('/company',{}).subscribe(res => {
      this.dataCompanys = res;
      console.log('company',this.dataCompanys);
    

    })
  }


}
