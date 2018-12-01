import { Router, Route } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = null;
  password: string = null;
  nick: string = null;

  constructor(private AuthenticationService: AuthenticationService,
              private UsersService: UsersService,
              private Router: Router) { }
  operation: string = 'login'

  ngOnInit() {
  }

  login() {
    this.AuthenticationService.loginWithEmail(this.email, this.password).then(
      response =>{
        alert('loggeado correctamente');
        console.log(response);
        this.Router.navigate(['home']);
      }).catch(error=>{
        alert(error);
      });
  }

  register() {
    this.AuthenticationService.registerWithEmail(this.email, this.password).then(
      response => {

        const user = {
          uid: response.user.uid,
          email: this.email,
          nick: this.nick
        }

        this.UsersService.createUser(user).then(
          reesponse =>{
            console.log(response)
          }).catch(error=>{
            console.log(error)
          });

        alert('registrado correctamente');
        console.log(response);
      }).catch(error => {
        alert(error);
      });
  }



  async loginWithFacebook() {
    try {
      const data = await this.AuthenticationService.loginWithFacebook()
      console.log(data)
      alert('Logged with facebook successful!')
    } catch (err) {
      console.log(err)
    }
  }

}
