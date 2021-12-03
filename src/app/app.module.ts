import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NavComponent } from './components/nav/nav.component';
import { RutaComponent } from './components/ruta/ruta.component';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import{FormsModule, ReactiveFormsModule,FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn} from '@angular/forms';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetallesComponent } from './components/detalles/detalles.component';
  


const config: SocketIoConfig = {url: 'http://localhost:3000', options: {}};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InicioComponent,
    LoginComponent,
    RegisterComponent,
    PrincipalComponent,
    NavComponent,
    RutaComponent,
    PerfilComponent,
    FooterComponent,
    DetallesComponent
  ],
  imports: [
    HttpClientModule,
    SocketIoModule.forRoot(config),
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBWSSUndNg-8FWlbcWtK8WXuc48YpAfIvk'
    })
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
