import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    CommonModule
  ],
  //Para usar estos componentes en otros modulos debo exportarlos
  exports:[
    NavbarComponent,
    BodyComponent,
    FooterComponent
  ]
})
export class SharedModule { }
