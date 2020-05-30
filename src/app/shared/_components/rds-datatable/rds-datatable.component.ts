import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BtnRenderTableComponent } from 'app/shared/_components/btn-render-table/btn-render-table.component';

// import * as dataTable from 'app/shared/data/datas-store';
// import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'rds:dataTable',
  templateUrl: './rds-datatable.component.html',
  styleUrls: ['./rds-datatable.component.scss'],
  encapsulation:ViewEncapsulation.None
})

export class RdsDatatableComponent implements OnInit {

 //datas:LocalDataSource;
 private gridApi;
 private gridColumnApi;
 private columnDefs;
 private rowData;
 private rowSelection;
 frameworkComponents: any;
 

  constructor() {
    //add data to ng2-smart-table
    //this.datas = new LocalDataSource(dataTable.datas);

    this.frameworkComponents ={
      buttonActions: BtnRenderTableComponent,
    }

    //columns head of ag-grid table
    this.columnDefs = [
      { headerName: 'Id', field: 'id', cellClass:'no-border' },
      { headerName: 'Name', field: 'name', cellClass:'no-border' },
      { headerName: 'Gender', field: 'gender', cellClass:'no-border' },
      { headerName: 'Age', field: 'age', cellClass:'no-border' },
      { headerName: 'Email', field: 'email', cellClass:'no-border' },
      { headerName: 'Phone', field: 'phone', cellClass:'no-border' },
      { headerName: 'Address', field: 'address', cellClass:'no-border' },
      { headerName: 'Actions', field: 'actions', cellClass:'no-border lock-pinned', lookPinned:true, pinned: "right", cellRenderer:'buttonActions',
        cellRendererParams :{
          onDetail: this.detail.bind(this),
          onRemove: this.remove.bind(this),
          //label: ''//for button can set this label inside the button
        }
      }
    ];

    //data of ag-grid able
    setTimeout(() => {
      this.rowData = [ 
        { id: '1',  name: 'Admin', gender: 'male', age:25, email:'redfox@gmail.com', phone:'012345678',address:'Phnom Penh',actions:'' },
        { id: '2',  name: 'Admin', gender: 'male', age:25, email:'redfox@gmail.com', phone:'012345678',address:'Phnom Penh',actions:'' },
        { id: '3',  name: 'Admin', gender: 'male', age:25, email:'redfox@gmail.com', phone:'012345678',address:'Phnom Penh',actions:'' },
        { id: '4',  name: 'Admin', gender: 'male', age:25, email:'redfox@gmail.com', phone:'012345678',address:'Phnom Penh',actions:'' },
        { id: '5',  name: 'Admin', gender: 'male', age:25, email:'redfox@gmail.com', phone:'012345678',address:'Phnom Penh',actions:'' },
      ];
    },2000);

    //choice of selects row of the that can be one row or multi-rows
    this.rowSelection = "single";
    //this.rowSelection = "multiple";
   }

   //remove on selected row data of ag-grid table
    remove(e){
      alert('Do you want to remove?');
      var selectedData = this.gridApi.getSelectedRows();
      console.log('selected value>>>>',selectedData);
      this.gridApi.updateRowData({
         remove: selectedData
      });
    };

    //detail datas
    detail(e){
      alert('Do you want to change location?');
    }

   //working on all data in table of ag-grid table
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
    }
    
    //clear all the datas in ag-grid table
    // clearData() {
    //   this.gridApi.setRowData([]);
    // }   
  
    // headers of ng2-smart-table
    //headers = dataTable.headers;

  
  ngOnInit() {
    
  }
   
  
}
