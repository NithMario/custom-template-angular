import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Leads } from 'app/shared/_models/model-lead';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { RestApiService } from 'app/shared/services/rest-api.service';


@Component({
  selector: 'app-lead-view',
  templateUrl: './lead-view.component.html',
  styleUrls: ['./lead-view.component.scss']
})
export class LeadViewComponent implements OnInit {
  lead = new Leads();
  paramid: any;
  dataLeads: any = {};
  objCom: any = {
    company: this.lead.company,
    address: this.lead.address,
    website: this.lead.website,
    phone: this.lead.phone,
    industry: this.lead.industry,
    email: this.lead.email,

  }
  objContact: any = {
    firstname: this.lead.firstname,
    lastname: this.dataLeads.lastname,
    mobile: this.dataLeads.mobile,
    company: this.dataLeads.company,
    phone: this.dataLeads.phone,
    status: this.dataLeads.status,



  }
  constructor(
    private route: Router,
    private http: HttpClient,
    private routeid: ActivatedRoute,
    private ngxSpinnerService: NgxSpinnerService,
    private restApiService: RestApiService
  ) { }

  ngOnInit() {
    this.routeid.params.subscribe(res => {
      this.paramid = res['leadId'];
    })
    this.onJsonLeadGet();
  }

  onConvert() {
    this.ngxSpinnerService.show();
    setTimeout(() => {
      console.log(this.objContact.firstName);
      this.restApiService.postByPath('/covert/' + this.lead['id'], this.lead).subscribe(res => {
        console.log(res);
      });

      this.ngxSpinnerService.hide();
    }, 1000);


  }

  onCancel() {
    this.route.navigate(['/lead']);
  }

  onJsonLeadGet() {

    return this.restApiService.getByPath('/lead/' + this.paramid, this.lead).subscribe(res => {
      this.dataLeads = res;
      this.lead = res;

    })
  }









}
