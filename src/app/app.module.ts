import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import { OfertaDespachoComponent } from './oferta-despacho/oferta-despacho.component';
import { PrincipalComponent } from './principal/principal.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';
import { RegistroComponent } from './registro/registro.component';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const router: Routes = [
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'formregistro',
    component: FormRegistroComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: PrincipalComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    OfertaDespachoComponent,
    PrincipalComponent,
    PiepaginaComponent,
    RegistroComponent,
    FormRegistroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
