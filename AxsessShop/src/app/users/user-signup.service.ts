import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Injectable()
export class UserSignupService {

  constructor() { }

  signup(user) {
    const usersListJson = localStorage.getItem("usersList");
    let usersList = usersListJson? JSON.parse(usersListJson) : [];

    if(this.isEmailNotInUse(user.email, usersList)) {
      usersList = [...usersList, Object.assign({}, user)];
      localStorage.setItem("usersList", JSON.stringify(usersList));
      localStorage.setItem("user", JSON.stringify(user));
      return {successful: true, error: undefined};
    }
    else {
      return {successful: false, error: "Email is in-use."};
    }
  }

  isEmailNotInUse(email, usersList: Array<any>): boolean {
    return isNullOrUndefined(usersList.find(user => user.email == email));
  }

}
