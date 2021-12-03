import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Lugar } from 'src/app/models/lugar';
import { MapsService } from 'src/app/services/maps.service';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})


export class DetallesComponent implements OnInit {
  datos:Lugar;
  intento:Lugar[];
  public url:string;
  constructor( private router:Router, private routeget:ActivatedRoute, private maps: MapsService) {
    this.datos={
      place_id:'',
       formatted_address: '',
       name: '',
       rating: '',
       photos: '',
       reviews: '',
      }
      this.intento = [];
   }  

  ngOnInit(): void {
    this.url = this.routeget.snapshot.paramMap.get('place_id');
    console.log(this.url);

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url2 = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${this.url}&fields=place_id%2Cname%2Crating%2Cgeometry%2Copening_hours%2Cformatted_address%2Creviews%2Cphotos&key=AIzaSyBWSSUndNg-8FWlbcWtK8WXuc48YpAfIvk`
    fetch(proxyurl + url2)
    .then(response => 
    response.json())
    .then(contents => {
      // console.log(contents.result.geometry.location.lat);
      for(let key in contents){
          let customObj = new Lugar(
        contents[key]["place_id"],
        contents[key]["formatted_address"],
        contents[key]["name"],
        contents[key]["rating"],
        contents["result"]["photos"],
        contents["result"]["reviews"],
        );
        console.log(contents.result.reviews);
        this.intento.push(customObj);
      }
      const lat = contents.result.geometry.location.lat;
      const lng = contents.result.geometry.location.lng;
      this.maps.setLocation(lat);
      this.maps.setLgn(lng);
    })
    .catch(() => console.log("Can’t access " + url2 + " response. Blocked by browser?"))

  }

}
