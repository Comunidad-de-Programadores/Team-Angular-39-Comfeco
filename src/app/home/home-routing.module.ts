import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ComunidadesComponent } from './pages/comunidades/comunidades.component';


const routes: Routes = [

  {
    path: '', children: [
      { path: '', component: HomeComponent },
      { path: 'comunidades', component: ComunidadesComponent }
     


    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
