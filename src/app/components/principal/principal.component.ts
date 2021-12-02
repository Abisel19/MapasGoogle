import { Component, OnInit } from '@angular/core';
import { MapsService } from 'src/app/services/maps.service';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers: [MapsService]
})
export class PrincipalComponent implements OnInit {
  http_option={
    headers: new HttpHeaders()
  }

  constructor( public http: HttpClient) {

    this.http_option.headers= new HttpHeaders({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Authorization"
    });
    
   }
  

  ngOnInit(): void {
    // this.dataSvc.getAll().subscribe(res=>{
    //   console.log('Res', res);
    // });
    this.obtener_ruta();
  }

  obtener_ruta(){
    const heades = new Headers();
    heades.append('Access-Control-Allow-Headers', 'Content-Type');
    heades.append('Access-Control-Allow-Methods', 'GET');
    heades.append('Access-Control-Allow-Origin', '*');
     this.http.get('https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJmWs71vErTI8Rv7d4a3Auw2w&key=AIzaSyBWSSUndNg-8FWlbcWtK8WXuc48YpAfIvk', this.http_option)
     .subscribe(data=>{console.log});
  }

}
