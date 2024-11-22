import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExempleComponent } from './Component exemple/exemple.component';
import { RegistreUsuariComponent } from './registre-usuari/registre-usuari.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentHomeComponent } from './component-home/component-home.component';
import { FormsModule } from '@angular/forms';
import { ListadoEnfermerosComponent } from './listado-enfermeros/listado-enfermeros.component';

const APP_ROUTES:Routes=[
  { path: '', component: ExempleComponent },
  { path: 'registre', component: RegistreUsuariComponent },
  { path: 'home', component: ComponentHomeComponent },
  {path: 'lista', component: ListadoEnfermerosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ExempleComponent,
    RegistreUsuariComponent,
    ComponentHomeComponent,
    ListadoEnfermerosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
