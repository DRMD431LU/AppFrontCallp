import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import {SharedModule} from '@shared/shared.module';

@NgModule({
  declarations: [
    HomePageComponent,
    ContactoComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule//Importar aqui el modulo k voy a ocupar aqui dentro de mi modulo
  ],
  exports:[

  ]
})
export class HomeModule { }
