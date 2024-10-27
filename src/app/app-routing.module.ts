import { CategoriasComponent } from './categorias/categorias.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// TELAS
import { HomeComponent } from './home/home.component'
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { CategoriaFormComponent } from './categoriaform/categoriaform.component'

const routes: Routes = [
  { path: '', redirectTo: 'visao-geral', pathMatch: 'full' }, // Rota padrão redireciona para 'visão geral'
  { path: 'visao-geral', component: HomeComponent },    
  { path: 'relatorios', component: RelatoriosComponent }, 
  { path: 'categorias', component: CategoriasComponent }, 
  { path: 'nova-categoria', component: CategoriaFormComponent },
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,         
 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
