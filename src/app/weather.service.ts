import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = 'efe6a01792d8f25c82863a14724dd01b';

  constructor(private http: HttpClient) { }


getWeatherDataByCoords(lat: string | number | boolean, lon: string | number | boolean) {
  let params = new HttpParams()
  .set('lat', lat)
  .set('lon', lon)
  .set('units', 'imperial')
  .set('appid', this.apiKey)

  return this.http.get(this.url, {params});
}
}
