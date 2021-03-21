import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './pages/questions/questions.component';
import { Step2Component } from './pages/step2/step2.component';

import { RegisterComponent } from './register.component';

const routes: Routes = [

{ path: '', children:[
  { path: '', component: RegisterComponent },
  { path: 'team', component: Step2Component },
  { path: 'cuestionario', component: QuestionsComponent }


]},
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
