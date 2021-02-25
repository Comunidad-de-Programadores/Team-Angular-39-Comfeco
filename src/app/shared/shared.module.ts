import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '@app/shared/components-global/footer/footer.component';
import { NavComponent } from '@app/shared/components-global/nav/nav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FooterComponent,NavComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[FooterComponent,NavComponent],
})
export class SharedModule { }
