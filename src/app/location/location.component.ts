import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from '@types/googlemaps';
import { MapsAPILoader } from '@agm/core';
import { WeatherService } from '../weather.service';
import { AppSettings } from '../app.settings'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})

export class LocationComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public data: Array<any>;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private weather: WeatherService
  ) {
      this.setData();
      this.weather.setLatLng(this.data);
    }

  ngOnInit() {
    //set google maps defaults
    this.zoom = 4;
    this.latitude = AppSettings.DEFAULT_LAT;
    this.longitude = AppSettings.DEFAULT_LNG;

    //create search FormControl
    this.searchControl = new FormControl();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: []
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
          this.setData();
          this.weather.setLatLng(this.data);
          this.triggerForecast();
        });
      });
    });
  }
  
  triggerForecast() {
    this.weather.newForecastRequest();
  }
  
  private setData() {
    (this.latitude == undefined) ? this.data = [AppSettings.DEFAULT_LAT, AppSettings.DEFAULT_LNG] : this.data = [this.latitude, this.longitude];
  }

}