import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistreUsuariComponent } from './registre-usuari/registre-usuari.component';
import { ComponentHomeComponent } from './component-home/component-home.component';
import { ExempleComponent } from './Component exemple/exemple.component';
import { ListadoEnfermerosComponent } from './listado-enfermeros/listado-enfermeros.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
