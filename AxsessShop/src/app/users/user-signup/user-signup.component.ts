import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSignupService } from '../user-signup.service';

@Component({
  selector: 'as-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };
  confirmPassword: ''

  constructor(private _userSignupService: UserSignupService, private _router: Router) { }

  ngOnInit() {
    console.log("Sign-up onInit");
  }

  signup() {
    if (this._userSignupService.signup(this.user))
      this._router.navigate(['dashboard']);
  }

}
