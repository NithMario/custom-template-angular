import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Leads } from 'app/shared/_models/model-lead';
import { RestApiService } from 'app/shared/services/rest-api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-company-home-detail',
  templateUrl: './company-home-detail.component.html',
  styleUrls: ['./company-home-detail.component.scss']
})
export class CompanyHomeDetailComponent implements OnInit {
  // company = new Leads();
  company:any = {};
  paramId:number;
  constructor(
    private route:Router,
    private http:HttpClient,
    private restApiService:RestApiService,
    private router:ActivatedRoute
    ) { }

  ngOnInit() {
    this.router.params.subscribe(res=>{
      console.log(res);
      this.paramId = res.id;
    })
    this.onDetailCompany();
  }
  onCancel(){
    this.route.navigate(['/company'])
  }
  searchText;



  onDetailCompany(){
    this.restApiService.getByPath('/company/'+this.paramId,{}).subscribe(res=>{
      console.log(res);
      this.company = res;
    })
  }

}
