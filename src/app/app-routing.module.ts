import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfertaDespachoComponent } from './oferta-despacho/oferta-despacho.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/oferta-despacho-screen',
    pathMatch: 'full'
  }, // este es mi begin
  {
    path: 'oferta-despacho-screen',
    component: OfertaDespachoComponent
  },
  {
    path: '**',
    redirectTo: '/oferta-despacho-screen'
  } //cuando se escribe cualquier cosa, te redirecciona a la pagina de inicio end
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
