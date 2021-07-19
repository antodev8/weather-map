import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherService } from './weather.service';




@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }


  makeCapitalPopup(data: any, params:HttpParams): string{

    return `` +
      `<div>Capital: ${ data.name }</div>` +
      `<div>State: ${ data.state }</div>` +
      `<div>Meteo: ${data.params}</div>`


  }
}
