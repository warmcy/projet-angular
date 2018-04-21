import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Town } from './town';

@Injectable()
export class WeatherService {
  
 readonly URL = "http://lpa2sgadot.herokuapp.com/towns";
  
  constructor(private http: HttpClient) { 
  }

  getTowns(): Observable<Town> {
    return this.http.get(this.URL + '.json');
  }
  
  public getTownById(id: number): Observable<Town> {
    return this.http.get<Town>(this.URL + id + ".json");
  }

}