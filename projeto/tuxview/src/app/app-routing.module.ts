import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormularioComponent } from './fotografia/formulario/formulario.component';
import { FotoComponent } from './fotografia/foto/foto.component';
import { FotoformupdateComponent } from './fotografia/fotoformupdate/fotoformupdate.component';
import { InicioComponent } from './fotografia/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'fotos', component: FotoComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'formupdate/:id', component: FotoformupdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
