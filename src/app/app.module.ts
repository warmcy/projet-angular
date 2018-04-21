import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { enableProdMode } from '@angular/core';
import { LocalForecastComponent } from './local-forecast/local-forecast.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { WeatherService } from './weather.service';
import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';
import { LocationComponent } from './location/location.component';
enableProdMode();
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
    LocationComponent,
    LocalForecastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
