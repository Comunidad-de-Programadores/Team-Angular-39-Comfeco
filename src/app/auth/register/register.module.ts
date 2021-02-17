import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { Step2Component } from './pages/step2/step2.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegisterComponent, Step2Component, QuestionsComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule

  ]
})
export class RegisterModule { }
