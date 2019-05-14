import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifierchart',
  templateUrl: './notifierchart.component.html',
  styleUrls: ['./notifierchart.component.sass']
})
export class NotifierchartComponent implements OnInit {
  id = 'AngularChart5';
  width = 600;
  height = 400;
  type = 'doughnut2d';
  dataFormat = 'json';
  dataSource;

  constructor() {
    this.dataSource = {

      "chart": {
        "caption": "Notifiers Current Status*",
        "subCaption": "* - Indicates that actual value may be vary",
        "numberPrefix": "Records.",
        "startingAngle": "310",
        "decimals": "0",
        "defaultCenterLabel": "Total Records: 2500 .",
        "centerLabel": "",
        "theme": "fint"
      },
      "data": [{
        "label": "Activity",
        "value": "800"
      }, {
        "label": "Interaction",
        "value": "700"
      }, {
        "label": "Lead",
        "value": "500"
      }, {
        "label": "CP",
        "value": "500"
      }]
    }
   }

  ngOnInit() {
  }

}
