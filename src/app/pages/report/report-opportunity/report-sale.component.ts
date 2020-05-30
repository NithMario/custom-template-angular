import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-report-sale',
  templateUrl: './report-sale.component.html',
  styleUrls: ['./report-sale.component.scss']
})
export class ReportSaleComponent implements OnInit {
  months = [{name:'January'},{name:'February'},{name:'March'},{name:'April'},{name:'May'},{name:'June'},{name:'July'},{name:'August'},{name:'September'},{name:'Octomber'},{name:'November'},{name:'December'}];
  years=[{name:'2019'},{name:'2018'},{name:'2017'},{name:'2016'},{name:'2015'},{name:'2014'},{name:'2013'},{name:'2012'},{name:'2011'},{name:'2010'},{name:'2009'},{name:'2008'}]
  
  constructor(private route:Router,private http:HttpClient) { }
  ngOnInit() {
    this.onOpenOpp();
  }
  

  searchText;
  // Table data
  // closeWon = [
  //   { no: 1, topic: 'web application', company: 'Redfox' ,contact:'Admin',date:'24/12/2019',status:'Close won',amount:'$100.00'},
  // ];
  // closeLose = [
  //   { no: 1, topic: 'web application', company: 'Redfox' ,contact:'Admin',date:'24/12/2019',status:'Close lose',amount:'$100.00'},
  // ];
  dataWon:any;
  dataLose:any;
  onOpenOpp(){
    this.http.get('/assets/data/reportOpp.json').subscribe(res=>{
      this.dataWon=res['closedWon']
      this.dataLose=res['closedLose']
      
  })
}
// Group by
gChanged($event){
  alert('Group by ...')
}








  // onCancel(){
  //   this.route.navigate(['/report']);
  // }
  // onPrint(){
  //   window.print();
  // }
}
