import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherService } from '../weather.service';
import { LocalForecastComponent } from './local-forecast.component';
import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('LocalForecastComponent', () => {
  let component: LocalForecastComponent;
  let fixture: ComponentFixture<LocalForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalForecastComponent ],
      imports: [
        BrowserModule,
        FormsModule, 
        ReactiveFormsModule,
        HttpClientModule
      ],
      providers: [WeatherService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});