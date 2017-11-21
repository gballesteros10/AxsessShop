import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'as-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Sign-up onInit");
  }

}
