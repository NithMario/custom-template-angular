import { Component,Renderer2, AfterViewInit, OnInit,ElementRef , ViewChild } from '@angular/core';
import { BtnRenderTableComponent } from 'app/shared/_components/btn-render-table/btn-render-table.component';
import { value } from 'app/shared/data/dropdowns';

@Component({
  selector: 'app-home-table',
  templateUrl: './home-table.component.html',
  styleUrls: ['./home-table.component.scss']
})
export class HomeTableComponent implements OnInit {

  //declaration of ag-grid table
  private gridApi;
  private gridColumnApi;
  private rowSelection;
  private columnDefs;
  private lstData;
  private icons;
  private noRowsTemplate;
  private loadingTemplate;
  private isScroll;
  public params;
  frameworkComponents: any;
  isView: boolean;
  Loading: boolean = true;

  @ViewChild('el') el: ElementRef;

  constructor(private renderer: Renderer2) { 

    var myGrid = document.querySelector('#myGrid');
      
    //loading and empty datas template
    this.loadingTemplate = `<span class="ag-overlay-loading-center no-border text-info">Loading datas...</span>`;
    this.noRowsTemplate =`<span class="d-inline-flex"><i class="ft-list font-medium-3 mr-1"></i>Data Empty!</span>`;
``
    //connection framwork button
    this.frameworkComponents ={
      buttonActions: BtnRenderTableComponent
    }
    //columns head of ag-grid table
    this.columnDefs = [
      { headerName: 'Id', field: 'id', width:120, cellClass:'no-border'},
      { headerName: 'Name', field: 'name', cellClass:'no-border ', headerCheckboxSelection: true, checkboxSelection: true,
                // headerComponentParams:{
                //   menuIcon:'fa-bars',
                //   template: '<i class="ft ft-square font-medium-3"></i><label>Name</label>'
                // } the second way to set label header and functions
      },
      { headerName: 'Age', field: 'age', cellClass:'no-border' },
      { headerName: 'Account Name', field: 'accountname', cellClass:'no-border' },
      { headerName: 'Title', field: 'title', cellClass:'no-border' },
      { headerName: 'Phone', field: 'phone', cellClass:'no-border' },
      { headerName: 'Email', field: 'email', cellClass:'no-border' },
      { headerName: 'Address', field: 'address', cellClass:'no-border' },
      { headerName: 'Actions', field: 'action',width:105 , cellClass:'no-border look-pinned',
        lookPinned:true, pinned: "right", cellRenderer:'buttonActions',
        cellRendererParams :{
          onDetail: this.oneRowEdit.bind(this),
          onRemove: this.remove.bind(this)
          //label: ''//for button can set this label inside the button
        }
      },
    ];
     //set time out data of ag-grid able
    setTimeout(()=>{
      this.lstData = [ 
        { id: '1',  name: 'Admin',  age:'25', accountname: 'accountname',title:'MD',phone:'0123456789', email:'redfox@gmail.com',address:'Phnom Penh', action: ''},
        { id: '2',  name: 'Admin1', age:'25', accountname: 'accountname',title:'MD',phone:'0123456789', email:'redfox@gmail.com',address:'Phnom Penh', action: ''},
        { id: '3',  name: 'Admin2', age:'25', accountname: 'accountname',title:'MD',phone:'0123456789', email:'redfox@gmail.com',address:'Phnom Penh', action: ''},
        { id: '4',  name: 'Admin3', age:'25', accountname: 'accountname',title:'MD',phone:'0123456789', email:'redfox@gmail.com',address:'Phnom Penh', action: ''},
        { id: '5',  name: 'Admin4', age:'25', accountname: 'accountname',title:'MD',phone:'0123456789', email:'redfox@gmail.com',address:'Phnom Penh', action: ''},
      ];
        this.isView = true;
        this.Loading = false;
     },2000);

    //choice of selects row of the grid that can be one row or multi-rows 
     this.rowSelection = "multiple";// if want to select only one row input 'single' in double quotes
  
  }
    //working on all data in table of ag-grid table
     onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
      //   setTimeout(function(){
      //     params.api.sizeColumnsToFit();
      //   },2000);
    }

    //remove on selected row data of ag-grid table
    remove(gridRow){
      let data = gridRow.rowData;// view row data selected
        console.log('row delete>>>', data);

      let index = this.lstData.indexOf(data);//view index of row data
        console.log('index>>>>>>>>',index);

      this.lstData.splice(index,1);//remove one data from list datas
      this.gridApi.setRowData([]);// clear list 

      alert(JSON.stringify(data));//alert data list

      //set new list
      this.gridApi.updateRowData({
        add: this.lstData
      })
        console.log('listData>>>>>',this.lstData);
    };

    //edit datas
    oneRowEdit(gridRow){
      let data = gridRow.rowData;
      let index = this.lstData.indexOf(data);
      alert(JSON.stringify(data));
      console.log('index>>>>>>>', index);
      console.log('data row>>>>', data);
      console.log('grid row>>>>' , gridRow);
    }
  
    //multiple edit
    multiRowEdit(gridRow){

    var Data = {};
    var selectedData = this.gridApi.getSelectedRows();
    this.gridApi.forEachNode(function (node) {
        Data = selectedData;
    })
      alert('you can view muli-datas');
      console.log("row data:",Data);
    }
     
    ngOnInit() {
    }

}
