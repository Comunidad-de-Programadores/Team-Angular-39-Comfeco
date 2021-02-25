import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/**
 * Modulos Angular
 */
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
/**
 * Modulos Angular Fire
 */
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireStorageModule } from '@angular/fire/storage';


import { environment } from 'src/environments/environment';
/**
 * Services
 */
import { AuthService } from '@app/core/services/auth.service';
import { NotificationService } from '@app/core/services/notification.service';




@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
    ReactiveFormsModule

  ],

  providers: [AuthService,NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
