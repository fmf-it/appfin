
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';
import { withFetch } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';

// TELAS
import { HomeComponent } from './home/home.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaFormComponent } from './categoriaform/categoriaform.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RelatoriosComponent,
    CategoriasComponent,
    CategoriaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIcon, 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
