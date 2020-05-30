import { Component, OnInit, TemplateRef } from '@angular/core';
import { Full_ROUTES } from 'app/shared/routes/full-layout.routes';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Opportunity } from 'app/shared/_models/model-opportunity';
import { RestApiService } from 'app/shared/services/rest-api.service';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.scss']
})

export class OpportunityComponent {
  opportunity = new Opportunity();
  eOpps =new Opportunity();

  modalRef: BsModalRef | null;
  modalRefItem: BsModalRef;
  oId: any;
  dataOpps:any;
  searchText:any;
  constructor(
    private modalService: BsModalService,
    private route: Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private restApiService:RestApiService
  ) { }
  ngOnInit() {
    this.onJsonOpp();
    this.activatedRoute.params.subscribe(paramId => {
      this.oId = paramId;
      console.log(' lId', this.oId);
    })
  }

  openModalWithClass(view: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      view,
      Object.assign({}, { class: 'gray modal-lg' }),
    );
  }

  openModalItem(view: TemplateRef<any>) {
    this.modalRefItem = this.modalService.show(view, Object.assign({}, { class: 'gray modal-lg item' }))
  }
  onView() {
    // this.route.navigate(['opportunity/detailOpp'])
  }
  
  onRemoved(id) {
    const confirmed = window.confirm('Do you want to delete record id = '+id +' ?');
    if (confirmed) {
      this.restApiService.deleteByPath('/deleteopportunity/'+id).subscribe(res=>{
        this.onJsonOpp()
      })
    } else {

    }
    
  }
  onSave() {
    this.restApiService.postByPath('/createopportunity', this.opportunity).subscribe(res=>{
      this.opportunity=res;
    });
      this.route.navigate(['/opportunity']);
      console.log('Msg===>',this.opportunity);
  }
  onCancel() {
    this.route.navigate(['/lead']);
  }
  onJsonOpp() {
    this.restApiService.getByPath('/opportunity',{}).subscribe(res => {
      this.dataOpps = res;
      this.eOpps = res;
    })
  }



}


