import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SendEmailComponent } from '../send-email/send-email.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PoliticaComponent } from './page/politica/politica.component';
import { TerminosComponent } from './page/terminos/terminos.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [LoginComponent, SendEmailComponent, PoliticaComponent, TerminosComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class LoginModule { }
