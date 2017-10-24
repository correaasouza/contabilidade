import { ClientesService } from './clientes/clientes.service';
import { ClientesComponent } from './clientes/clientes.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, 
    ClientesComponent
  ],
  imports: [
    BrowserModule
  ],
  exports:[
    ClientesComponent
  ],
  providers: [
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
