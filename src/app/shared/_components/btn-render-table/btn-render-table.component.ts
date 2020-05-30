import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-btn-render-table',
  templateUrl: './btn-render-table.component.html',
  styleUrls: ['./btn-render-table.component.scss']
})
export class BtnRenderTableComponent implements ICellRendererAngularComp {

  params;
  label: string;
  agInit(params): void{
    this.params = params;
    this.label = this.params.label || null;
  }
  
  refresh(params?: any): boolean{
    return true;
  }

  onDetail($event){
    if(this.params.onDetail instanceof Function){
      const params = {
          event: $event,
          rowData: this.params.node.data
      }
      this.params.onDetail(params);
    }
  }
  
  onRemove($event){
    if(this.params.onRemove instanceof Function){
      const params = {
        event: $event,
        rowData: this.params.node.data
      }
      this.params.onRemove(params);
    }
  }
}
