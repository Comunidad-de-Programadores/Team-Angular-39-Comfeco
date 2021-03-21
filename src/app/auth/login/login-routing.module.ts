import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendEmailComponent } from '../send-email/send-email.component';

import { LoginComponent } from './login.component';
import { PoliticaComponent } from './page/politica/politica.component';
import { TerminosComponent } from './page/terminos/terminos.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'verificar-email', component: SendEmailComponent },
  { path: 'privacidad', component: PoliticaComponent },
  { path: 'terminos', component: TerminosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
