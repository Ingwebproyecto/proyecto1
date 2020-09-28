import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import { OfertaDespachoComponent } from './oferta-despacho/oferta-despacho.component';
import { PrincipalComponent } from './principal/principal.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';

@NgModule({
  declarations: [
    AppComponent,
    OfertaDespachoComponent,
    PrincipalComponent,
    PiepaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
