import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'as-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  error = '';

  constructor(private _userLoginService: UserLoginService, private _router: Router) { }

  ngOnInit() {
    console.log("Login onInit");
  }

  login() {
    if(this._userLoginService.login(this.user))
      this._router.navigate(['dashboard']);
    else
      this.error = "Invalid email and/or password.";
  }

}
