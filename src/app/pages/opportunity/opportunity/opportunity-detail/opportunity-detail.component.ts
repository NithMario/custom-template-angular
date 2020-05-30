import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Router } from '@angular/router';
import { Opportunity } from 'app/shared/_models/model-opportunity';
import { HttpClient } from '@angular/common/http';
import { RestApiService } from 'app/shared/services/rest-api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-opportunity-detail',
  templateUrl: './opportunity-detail.component.html',
  styleUrls: ['./opportunity-detail.component.scss']
})
export class OpportunityDetailComponent implements OnInit {
  modalRef: BsModalRef | null;
  modalRefItem: BsModalRef;
  opportunity = new Opportunity();
  dataOpps: any = [];
  paramId:string;
  constructor(
    private modalService: BsModalService,
    private route: Router,
    private http: HttpClient,
    private restApiService:RestApiService,
    private activateRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(res=>{
      console.log(res.id);
      this.paramId= res.id;
    })
    this.getOppbyId();
  }
  onItem(){
    alert('Linking')
  }
  onCancel() {
    this.route.navigate(['opportunity']);
  }
  getOppbyId() {
    this.restApiService.getByPath('/opportunity/'+this.paramId,{}).subscribe(res => {
      this.dataOpps = res;
      console.log('',this.dataOpps);

    })
  }


}
