import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as L from 'leaflet';
import { PopupService } from './popup.service';


@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  capitals: string = '/assets/data/usa-capitals.geojson';


  constructor(private http: HttpClient,private popupService: PopupService) { }

  makeCapitalMarkers(map: L.Map): void {

    this.http.get(this.capitals).subscribe((res: any) => {
      const maxVal = Math.max(...res.features.map((x: { properties: { population: any; }; }) => x.properties.population), 0);
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const marker = new L.Marker([lat, lon]);

        marker.bindPopup(this.popupService.makeCapitalPopup(c.properties, c.params));

        marker.addTo(map);
      }

    });

  }
}
