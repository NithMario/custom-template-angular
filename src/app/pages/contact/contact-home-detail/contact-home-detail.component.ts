import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Leads } from 'app/shared/_models/model-lead';
import { RestApiService } from 'app/shared/services/rest-api.service';

@Component({
  selector: 'app-contact-home-detail',
  templateUrl: './contact-home-detail.component.html',
  styleUrls: ['./contact-home-detail.component.scss']
})
export class ContactHomeDetailComponent implements OnInit {
  contacts = new Leads();
  id:any;

  constructor(
    private route:Router,
    private http:HttpClient,
    private restApiService:RestApiService,
    private activatedRoute:ActivatedRoute
    ) { }
  ngOnInit() {
    
    this.activatedRoute.params.subscribe(res=>{
      this.id=res.id;
      console.log(this.id)
    })
    this.onJsonLeadGet();

  }
  onCancel(){
    this.route.navigate(['contact']); 
  }
  onJsonLeadGet() {
    return this.restApiService.getByPath('/contact/'+this.id,this.contacts).subscribe(res => {
      this.contacts = res;
      // this.oContact = this.dataLeads.slice(2)[0]; // ដកចេញ
      console.log('vContact :', this.contacts);
    })
  }

}
