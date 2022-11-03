import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule
  ],
  //Para usar estos componentes en otros modulos debo exportarlos
  exports:[
    NavbarComponent,
    SidebarComponent ,
    FooterComponent
  ]
})
export class SharedModule { }
