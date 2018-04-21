import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from '../app.settings';
import 'rxjs/add/operator/do'

@Component({
  selector: 'app-local-forecast',
  templateUrl: './local-forecast.component.html',
  styleUrls: ['./local-forecast.component.css']
})
export class LocalForecastComponent implements OnInit {
  lat: number;
  lng: number;
  public data = {};
  forecast: Observable<any>;

  constructor(private weather: WeatherService) {
    /// suscribing to coordinates data 
    this.weather.setLatLng$.subscribe((data) => {
        this.data = data;
      }
    );
  }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       this.lat = position.coords.latitude;
       this.lng = position.coords.longitude;
     });
   } else {
     /// default coords
    this.lat = AppSettings.DEFAULT_LAT;
    this.lng = AppSettings.DEFAULT_LNG;
   }
   /// Request forecast on location trigger
   this.weather.locationsTrigger$.forEach(event => this.getForecast());
  }

  getForecast() {
    this.forecast = this.weather.currentForecast()
      .do(data => console.log(data))
  }
  
  setLatLngFromData() {
    this.lat = this.data[0];
    this.lng = this.data[1];
  }
  
  /// Helper to make weather icons work
  /// better solution is to map icons to an object 
  weatherIcon(icon) {
    switch (icon) {
      case 'partly-cloudy-day':
        return 'wi wi-day-cloudy'
      case 'clear-day':
        return 'wi wi-day-sunny'
      case 'partly-cloudy-night':
        return 'wi wi-night-partly-cloudy'
      default:
        return `wi wi-day-sunny`
    }
  }

}