import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import{User}from '../../models/user';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public token: string;
  httpOptions = {
    headers: new HttpHeaders()
  };
  public user: User;
  public users: User[];
  constructor(public http:HttpClient,private router: Router, private authService: AuthService,) { 
    this.token = authService.retornarToken();
    this.httpOptions.headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    this.users = [];
    this.user= {
      id:0,
    name: '',
    email: '',
    password: '',
    telefono: '',
    rol: '',
    token: ''
    }
  }

  ngOnInit(): void {
    this.obteneruser();
  }
obteneruser(){
  this.http.get('http://localhost:8000/api/perfil',this.httpOptions).subscribe(data=>{
   console.log(data['id']);
   let customObj = new User(
    data['id'],
    data['name'],
    data['email'],
    null,
    null,
    null,
    null,
   
    
  );
  this.users.push(customObj);

  //  for (let key in data) {
  //   // let value = data[key]['id'];
  //   //console.log(value);
  //   let customObj = new User(
  //     data['id'],
  //     data['name'],
  //     data['email'],
  //     null,
  //     null,
  //     null,
  //     null,
     
      
  //   );

  //   this.users.push(customObj);
  // }
  });
}
}
