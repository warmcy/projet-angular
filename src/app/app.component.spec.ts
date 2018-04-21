import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { enableProdMode } from '@angular/core';
import { LocalForecastComponent } from './local-forecast/local-forecast.component';
import { HttpClientModule } from '@angular/common/http';

import { WeatherService } from './weather.service';

import { MeteoComponent } from './meteo/meteo.component';
import { LocationComponent } from './location/location.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MeteoComponent,
        LocationComponent,
        LocalForecastComponent
      ],
      imports: [
        BrowserModule,
        AgmCoreModule.forRoot({
          apiKey: "AIzaSyCo9k2z8br56H8foQ10J-CWQI9guxs60lQ",
          libraries: ["places"]
        }),
        FormsModule, 
        ReactiveFormsModule,
        HttpClientModule
      ],
      providers: [WeatherService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});