import { Component, Input, OnInit } from '@angular/core';
import { MapsService } from 'src/app/services/maps.service';
import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Lugar } from 'src/app/models/lugar';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})


export class PrincipalComponent implements OnInit {

  datos:Lugar;
  intento:Lugar[];
  id1: string;

  constructor(public http: HttpClient) {
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
    this.obtenerRuta();
  }

  obtenerRuta(){
    this.id1='ChIJz0DQy_UoTI8REdhmjYitQPQ';
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${this.id1}&fields=place_id%2Cname%2Cgeometry%2Copening_hours%2Cformatted_address%2Creviews%2Cphotos&key=AIzaSyBWSSUndNg-8FWlbcWtK8WXuc48YpAfIvk`;
    this.http.get(proxyurl + url).subscribe(data=>{
      for(let key in data){
      let customObj = new Lugar(
      data[key]["place_id"],
      data[key]["formatted_address"],
      data[key]["name"],
      data[key]["rating"],
      data[key]["photos"],
      data[key]["reviews"],
      );
      console.log(customObj);
      this.intento.push(customObj);
    }
    })
  }
  

  

}
