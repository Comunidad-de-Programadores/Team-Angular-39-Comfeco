import { Component, OnInit } from '@angular/core';
import { User } from '@app/shared/models/user.interface';
import { AuthService } from '@app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  configNav;
  user: User;
  constructor(private authSvc:AuthService) {
   this.configNav= {user:{name:true,nick:true,notification:true},items:[{name:'Home',link:'/home',active:true},{name:'Inscribite Aqui!',link:'/register'},{name:'Login',link:'/login'}]};
  }

  ngOnInit(): void {
  this.authSvc.user$.subscribe(resp=>{
  this.user=resp;
  console.log(resp);
if(resp){
  this.configNav = { user: { name: true, nick: true, notification: true }, items: [{ name: 'Home', link: '/home', active: true }, { name: 'Inscribite Aqui!', link: '/register' }] };
}
    
})
  }

logOut(){
this.authSvc.logout();
  this.configNav = { user: { name: true, nick: true, notification: true }, items: [{ name: 'Home', link: '/home', active: true }, { name: 'Inscribite Aqui!', link: '/register' }, { name: 'Login', link: '/login' }] };

}

}
