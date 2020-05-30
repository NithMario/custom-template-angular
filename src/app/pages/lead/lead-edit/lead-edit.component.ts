import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Leads } from 'app/shared/_models/model-lead';
import { HttpClient } from '@angular/common/http';
import { RestApiService } from 'app/shared/services/rest-api.service';

@Component({
  selector: 'app-lead-edit',
  templateUrl: './lead-edit.component.html',
  styleUrls: ['./lead-edit.component.scss']
})
export class LeadEditComponent implements OnInit {
  lead = new Leads();
  dataLeads = new Leads();
  eId: any;
  constructor(
    private route: Router,
    private http: HttpClient,
    private activeRoute: ActivatedRoute,
    private restApiService: RestApiService
  ) { }

  ngOnInit() {
    this.onJsonLeadGet();
  }

  onCancel() {
    this.route.navigate(['/lead']);
  }
  onSave() {
    const confirmed = window.confirm('Are you save?');
    if (confirmed) {
      this.restApiService.postByPath('/updatelead/'+this.eId,this.dataLeads).subscribe( data=>{
        console.log(this.dataLeads)
      });
        this.route.navigate(['/lead']);
    } else {
      alert('Canceled')
    }
  }
  onSaveAs(){
    const confirmed = window.confirm('Do you want to create new lead ?');
    if (confirmed) {
      this.restApiService.postByPath('/createlead/',this.dataLeads).subscribe( data=>{
        console.log(this.dataLeads)
      });
        this.route.navigate(['/lead']);
    } else {
      alert('Canceled')
    }
  }
  onJsonLeadGet() {
    this.activeRoute.params.subscribe(res => {
      this.eId = res['leadId'];
      // console.log("Testing get by ID:",this.paramid);
    })
    this.restApiService.getByPath('/lead/' + this.eId, this.dataLeads).subscribe(res => {
      this.dataLeads = res;
      // this.lead =  this.dataLeads.slice(1)[0]; // slice(2)ដក data 1,2 ចេញ យកតែ 3 [0] បោះ object
      console.log('eLead:', this.dataLeads);
    })
  }

}
