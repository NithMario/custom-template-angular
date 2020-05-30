import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { RestApiService } from 'app/shared/services/rest-api.service';

@Component({
  selector: 'app-report-home',
  templateUrl: './report-home.component.html',
  styleUrls: ['./report-home.component.scss']
})
export class ReportHomeComponent implements OnInit {
  
  leadStatusOpen:any = [];
  LeadStatusCoverted:any = [];

  months = [{name:'January'},{name:'February'},{name:'March'},{name:'April'},{name:'May'},{name:'June'},{name:'July'},{name:'August'},{name:'September'},{name:'Octomber'},{name:'November'},{name:'December'}];
  today: number = Date.now();
  years=[{name:'2019'},{name:'2018'},{name:'2017'},{name:'2016'},{name:'2015'},{name:'2014'},{name:'2013'},{name:'2012'},{name:'2011'},{name:'2010'},{name:'2009'},{name:'2008'}]
  
  constructor(private route:Router, private http:HttpClient,private restApiService:RestApiService) { }
    
  ngOnInit() {
    this.getLeadStatusOpen();
    this.getLeadStatusConverted();
  }

  onCancel(){
    this.route.navigate(['/lead'])
  }
  onOpportunity(){
    this.route.navigate(['/report/report-sale']);
  }
  
  searchText;
  // Table data
  // opens = [
  //   { no: 1, company: 'Redfox', industry: 'Technology' ,contact:'Admin',phone:'011xxx',mobile:'012xx',requirment:'Sale',status:'Open',date:'24/12/2019'},
  //   { no: 2, company: 'Redfox', industry: 'Technology' ,contact:'Admin',phone:'012xxx',mobile:'012xx',requirment:'Sale',status:'Open',date:'24/12/2019'},
  //   { no: 3, company: 'Redfox', industry: 'Technology' ,contact:'Admin',phone:'0113xxx',mobile:'012xx',requirment:'Sale',status:'Open',date:'24/12/2019'},
  // ];
  // converts = [
  //   { no: 1, company: 'Redfox', industry: 'Technology' ,contact:'Admin',phone:'011xxx',mobile:'012xx',requirment:'Sale',status:'Convert',date:'24/12/2019'},
  //   { no: 2, company: 'Redfox', industry: 'Technology' ,contact:'Admin1',phone:'011xxx',mobile:'012xx',requirment:'Sale',status:'Convert',date:'24/12/2019'},
  //   { no: 3, company: 'Redfox', industry: 'Technology' ,contact:'Admin2',phone:'011xxx',mobile:'012xx',requirment:'Sale',status:'Convert',date:'24/12/2019'},
  // ];



    getLeadStatusOpen(){
      this.restApiService.getByPath('/reportisOpen',{}).subscribe(res=>{

        // this.dataReport=res;
        // this.dataConvert=res;
        console.log("Open:",res);
        this.leadStatusOpen = res;
      })
    }

    getLeadStatusConverted(){
      this.restApiService.getByPath('/reportisCovert',{}).subscribe(res=>{

        // this.dataReport=res;
        // this.dataConvert=res;
        console.log("Report:",res);
        this.LeadStatusCoverted = res;
     
      })
    }




  // onPrint(){
  //   window.print();
  // }
  // filterAssign(){
  //   window.print();
  // }
  ngMonth:any;
  onMonth($event){
    this.ngMonth='December';
  }

  gChanged($event){
    alert('Group by ...')
  }
  




}
