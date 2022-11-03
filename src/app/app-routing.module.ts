import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',//TODO (Private)
    //Carga perezoza Lazy loading
    loadChildren: () => import(`./modules/pages/home.module`).then(m => m.HomeModule),

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
