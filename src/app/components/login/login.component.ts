import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  heading = 'Sign IN';
  submitted: boolean=false;
  email:string ="";
  password:string ="";

  constructor(private authService: AuthService){}

  handleSubmit () {
    this.submitted=true;
    alert('email => ' + this.email + "\npassword => " + this.password);
    console.log('email => ' + this.email + "\npassword => " + this.password);

    this.authService.authenticate(this.email,this.password);
  }
  }
