import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import{LoginComponent} from './components/login/login.component';
import{RegisterComponent} from './components/register/register.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthuserGuard } from './guards/authuser.guard';
import { PerfilComponent } from './components/perfil/perfil.component';

import { PrincipalComponent } from './components/principal/principal.component';
import { RutaComponent } from './components/ruta/ruta.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { MarketComponent } from './components/market/market.component';


const routes: Routes = [
  {
    path: 'login',component: LoginComponent, canLoad: [ AuthuserGuard]
  },
  {
    path: 'register',component: RegisterComponent, canLoad: [ AuthuserGuard]
  },
  {
    path: 'home',component: HomeComponent,canActivate: [AuthGuard]
  },
  {
    path: 'inicio',component: InicioComponent
  },
  {
    path: 'ruta',component: RutaComponent, canActivate: [AuthGuard]
  },
  {
    path: 'principal',component: PrincipalComponent, canActivate: [AuthGuard]
  },
  {
    path: 'perfil',component: PerfilComponent, canActivate: [AuthGuard]
  },
  {
    path: 'detalles/:place_id',component: DetallesComponent, canActivate: [AuthGuard]
  },
  {
    path: 'market',component: MarketComponent, canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
