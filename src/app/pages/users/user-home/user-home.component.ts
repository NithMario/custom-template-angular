import { Component, OnInit } from '@angular/core';
// import * as dataTable from 'app/shared/data/datas-store';
// import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  
  //datas:LocalDataSource;
  constructor( 
    
    ) { 
    //this.datas = new LocalDataSource(dataTable.datas);
  
   
  }
  //headers = dataTable.headers;
   
  ngOnInit() {
    
  }
  


}
