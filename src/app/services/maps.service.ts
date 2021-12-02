import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  constructor(private http:HttpClient) {   
  }

  
  
  
  getAll():Observable<any>{
    return this.http.get<any>('https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJmWs71vErTI8Rv7d4a3Auw2w&fields=name%2Cgeometry%2Copening_hours%2Cformatted_address%2Creviews%2Cphotos&key=AIzaSyBWSSUndNg-8FWlbcWtK8WXuc48YpAfIvk');
  }    
}
