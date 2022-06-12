import { Component, OnInit } from '@angular/core';

import { ChartType, ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-pki-control',
  templateUrl: './pki-control.component.html',
  styleUrls: ['./pki-control.component.css']
})
export class PkiControlComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: String[] = ['Late', 'InTime', 'Today'];
  public doughnutChartData=  [
    {data: [{label:'InTime', value:65}, {label:'Late', value:65}, {label:'today', value:65}], label: 'Series A'}
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutOptions = {
  }
  constructor() { }

  ngOnInit(): void {
  }

}
