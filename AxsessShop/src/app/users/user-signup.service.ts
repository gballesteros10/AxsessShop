import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Injectable()
export class UserSignupService {

  constructor() { }

  signup(user): boolean {
    const usersListJson = localStorage.getItem("usersList");
    let usersList = usersListJson? JSON.parse(usersListJson) : [];

    if(this.isEmailNotInUse(user.email, usersList)) {
      usersList = [...usersList, Object.assign({}, user)];
      localStorage.setItem("usersList", JSON.stringify(usersList));
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    }
    else {
      alert("Email is in-use.");
      return false;
    }
  }

  isEmailNotInUse(email, usersList: Array<any>): boolean {
    return isNullOrUndefined(usersList.find(user => user.email == email));
  }

}
