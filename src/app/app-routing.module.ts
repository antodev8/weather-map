import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodayComponent} from './today/today.component';
import {MapComponent} from './map/map.component';
import {AppComponent} from './app.component';
import {AppModule} from './app.module';
import { WeatherService } from './weather.service';



const routes: Routes = [

{
path: '',
component: AppComponent
},

{
  path: 'today',
  component: TodayComponent
},


{
  path: 'map',
  component: MapComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [WeatherService]
})
export class AppRoutingModule { }
