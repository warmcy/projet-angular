import { Component, OnInit } from '@angular/core';
import { Town } from '../town';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {
  
  town: Town = {id: 1, name: 'VALLATOWN', temperature: 1000, icon: "sun"};
  
  constructor() { }

  ngOnInit() {
  }

}

