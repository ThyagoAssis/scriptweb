import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FotoComponent } from './foto/foto.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },

  { path: 'inicio', component: InicioComponent },
  { path: 'fotos', component: FotoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
