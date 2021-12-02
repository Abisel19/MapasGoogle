import { Component, OnInit } from '@angular/core';
import { MapCustomService } from 'src/app/services/map-custom.service';
import { LocationService } from 'src/app/services/location.service';
import * as mapboxgl from 'mapbox-gl' ;


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  public lat=0;
  public lng=0;
  
  constructor(public locationService: LocationService) {
  }
  ngOnInit() {
    let location = this.getLocation();
  }
  getLocation() {
    this.locationService.getPosition().then(pos => {
      this.lat = pos.lat;
      this.lng = pos.lng;
    });
  }

}
