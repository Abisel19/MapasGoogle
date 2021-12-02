import { Component, OnInit } from '@angular/core';
import { MapsService } from 'src/app/services/maps.service';
import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  

  constructor() {
    
   }


  

  ngOnInit(): void {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJmWs71vErTI8Rv7d4a3Auw2w&key=AIzaSyBWSSUndNg-8FWlbcWtK8WXuc48YpAfIvk"; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url)
    .then(response => response.json())
    .then(contents => console.log(contents))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  }

}
