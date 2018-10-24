import { Component } from '@angular/core';
import { MapsService } from './maps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng7-maps-ipapi';
  lat: string;
  lng: string;
  cityName: string;
  country: string;
  location: Object;
  constructor(private ms: MapsService) {
    this.lat = '';
    this.lng = '';
    this.cityName = '';
    this.country = '';
    this.ms.getGeoLocation().subscribe((res: any) => {
      console.log(res);
      this.lng = res.longitude;
      this.lat = res.latitude;
      this.cityName = res.city;
      this.country = res.country_name;
      this.location = res;
    });
  }
}
