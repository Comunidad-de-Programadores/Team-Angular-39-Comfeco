import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: '',children:[

{path:'teams', component:TeamsComponent}


  ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
