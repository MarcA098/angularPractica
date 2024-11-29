import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExempleComponent } from './Component exemple/exemple.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListadoEnfermerosComponent } from './listado-enfermeros/listado-enfermeros.component';

const APP_ROUTES:Routes=[
  { path: '', component: ExempleComponent },
  {path: 'lista', component: ListadoEnfermerosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ExempleComponent,
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
