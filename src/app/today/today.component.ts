import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import {WeatherService} from '../weather.service';




@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  lat!: number | string | boolean;
  lon!: number | string | boolean;
  weather!: any;




  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
   this.getLocation();
  }

  getLocation(){
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition((success)=>{
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.weatherService.getWeatherDataByCoords(this.lat, this.lon).subscribe(data=>{
          this.weather = data;
        });
      })
    }
  }



}
