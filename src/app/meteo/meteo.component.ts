import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Town } from '../town';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css'],
  providers: [WeatherService]
})
export class MeteoComponent implements OnInit {
  
  town: Town = new Town()
  
  constructor(private WeatherService: WeatherService) { }

  ngOnInit() {
    this.WeatherService.getTownById(1).subscribe(town => this.town = town);
  }

}

