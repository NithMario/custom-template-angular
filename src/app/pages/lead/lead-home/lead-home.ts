import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Assign } from 'app/shared/_models/model-assigned';
import { RestApiService } from 'app/shared/services/rest-api.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Users } from 'app/shared/_models/users';
import { UserService } from 'app/shared/services/_objects/user.service';

@Component({
  selector: 'app-lead-detail',
  templateUrl: './lead-detail.component.html',
  styleUrls: ['./lead-detail.scss']
})
export class HomeLeadComponent implements OnInit {
  assign = new Assign();
  modalRef: BsModalRef;
  dId: any = {};
  searchText;
  objUsers:any = [];
  user:any;
  selectedValue:any;
  dataLeads: any = [];
  countryForm: FormGroup;
  userId: number;
  constructor(
    private router: Router,
    private modalService: BsModalService,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private restApiService: RestApiService,
    private fb: FormBuilder,
    private $userSerives:UserService
  
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(paramId => {
      this.dId = paramId;
      console.log(' lId', this.dId);
      this.onJsonLeadGet();
    })
    this.countryForm = this.fb.group({
      countryControl: this.objUsers
    });
    this.onGetUser();
  }

  newLead() {
    // block newLead
    this.router.navigate(['lead/new-lead']);
  }
  onRemoved(lead) {
   
    const confirmed = window.confirm('Do you want to delete record id = '+lead +' ?');
    if (confirmed) {
      this.restApiService.delete(lead).subscribe(res=>{
        this.onJsonLeadGet()
      })
    } 
  }

  // opening popup to assign 
  assignLead(template: TemplateRef<any>,id) {
    if (id != null) {
      this.modalRef = this.modalService.show(template);
      this.userId = id;
      console.log(this.userId);
    }
  }
  // event change for select user id 
  onAssigned() {
 
    console.log('selected', this.selectedValue);
  }
  //post id of the users to db use in popup button 
  assignTo() {
 
    this.restApiService.postByPath('/assign/' + this.userId, { "name": this.selectedValue }).subscribe(res => {
    

    });
  }

  //get user from API
  onGetUser(){
    this.restApiService.getByPath('/users', {}).subscribe(res => {
      this.objUsers = res;

    });
  }

  onJsonLeadGet() {
    this.restApiService.getByPath('/lead', {}).subscribe(res => {
      this.dataLeads = res;
     
    });
  }









}
