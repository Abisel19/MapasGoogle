import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  map: any;
  public lat=0;
  public lng=-0;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  markers: Marker[] = [
    {
      position: {
        lat:21.1483155,
        lng: -86.79088039999999,
      },
      title: 'Playa Tortugas'
    },
    {
      position: {
        lat: 21.1446056,
        lng: -86.78057319999999,
      },
      title: 'Playa Langosta'
    },
    {
      position: {
        lat: 21.1324904,
        lng: -86.7466397,
      },
      title: 'Playa Forum'
    },
    {
      position: {
        lat: 21.0608654,
        lng: -86.7795105,
      },
      title: 'Playa Tortugas'
    },
    {
      position: {
        lat: 21.1611457,
        lng: -86.82748819999999,
      },
      title: 'Parque de las Palapas'
    },
    {
      position: {
        lat: 21.1106267,
        lng: -86.76438619999999,
      },
      title: 'Plaza la Isla'
    },
    {
      position: {
        lat: 21.1467939,
        lng: -86.82289360000001,
      },
      title: 'Plaza las Américas'
    },
    {
      position: {
        lat: 21.146935,
        lng: -86.8145219,
      },
      title: 'Malecon Tajamar'
    },
  ];

  constructor(public location: LocationService) { }

  ngOnInit(): void {
    this.loadMap();
  }

  loadMap() {
    this.location.getPosition().then(pos => {
      this.lat = pos.lat;
      this.lng = pos.lng;
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    const indicatorsEle: HTMLElement = document.getElementById('indicators');
    // create LatLng object
    const myLatLng = {lat: this.lat, lng: this.lng};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    this.directionsDisplay.setMap(this.map);
    this.directionsDisplay.setPanel(indicatorsEle);
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.renderMarkers();
      mapEle.classList.add('show-map');
    });
   });
  }
  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }
}
