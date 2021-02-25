import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home',pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('./auth//login/login.module').then(m => m.LoginModule) },
{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
 { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
{ path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
{ path: 'suscriptor', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'forgot-password', loadChildren: () => import('./auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
