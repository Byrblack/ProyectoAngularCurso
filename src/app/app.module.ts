import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import {Routes, RouterModule} from '@angular/router'

const routes: Routes=[
  {path:'', component:PrincipalComponent},
  {path:'pagina1', component:Pagina1Component},
  {path:'pagina2', component:Pagina2Component},
  {path:'pagina2/:id', component:Pagina2Component},
  {path:'**', component:PrincipalComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    Pagina1Component,
    Pagina2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
