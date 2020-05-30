import { Component, OnInit } from '@angular/core';
import { Chart, global, defaults } from 'chart.js';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Leads } from 'app/shared/_models/model-lead';
import { dashboard } from 'app/shared/_models/modal-dashboard';






@Component({
  selector: 'app-home-db',
  templateUrl: './home-db.component.html',
  styleUrls: ['./home-db.component.scss']
})
export class HomeDbComponent implements OnInit {
  objDashboard = new dashboard();
  dataDashboard: any = [];
  // barOpportunityStatus : any =[];
  title: number = 12

  public barChartOptions = {
    scaleShowVeticalLine: true,
    responsive: true,
  };
  public barChartLabels = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];
  public barChartType = 'bar';
  public barChartLegend = false;
  public dataChart = false;
  public barOpportunityStatus = [
    { data: [65,59,70,65,81,76,60,70,65,81,76,60], label: '' },
    { data: [65,59,70,65,81,76,60,70,65,81,76,60], label: '' }
  ];

  public dougnutChartLabels = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];
  public dougnutChartData = [65,59,70,65,81,76,60,70,65,81,76,60];
  public dougnutChartType = "pie";

  constructor(
    private http: HttpClient,

  ) { }

  ngOnInit() {
    this.getDataDashbord();
    this.getDataChart();
  }






  getDataDashbord() {
    return this.http.get('assets/data/dashboard.json', this.dataDashboard).subscribe(res => {
      this.dataDashboard = res;
      console.log('Msg=====>', this.dataDashboard);

    })
  }
  getDataChart(){
    return this.http.get('assets/data/dataChart.json', {}).subscribe(res => {
      let barOpportunityStatus = res;
      console.log('barOpportunityStatus=====>', barOpportunityStatus);

    })
  }







}