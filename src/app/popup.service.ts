import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherService } from './weather.service';




@Injectable({
  providedIn: 'root'
})
export class PopupService {



  constructor() { }




  makeCapitalPopup(data: any, _params:HttpParams): string{

    return `` +
      `<div>Città: ${ data.name }</div>` +
      `<div>Regione: ${ data.state }</div>` +
      `<div>Meteo: ${data.params}</div>`




  }
}
