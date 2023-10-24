import { Component } from '@angular/core';
import { UserAuthService } from 'src/app/core/_services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   
  constructor(private  userAuthService:  UserAuthService){}
  onSubmit(){
this.userAuthService.login()
  }
}
