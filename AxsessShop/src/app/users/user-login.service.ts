import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Injectable()
export class UserLoginService {

  constructor() { }

  login(user): boolean {
    if(this.isRegisteredUser(user)) {
      this.setLoggedInUser(user);
      return true;
    }
    return false;
  }

  isRegisteredUser(user): boolean {
    const usersListJson = localStorage.getItem("usersList");

    if (!isNullOrUndefined(usersListJson)){
      const usersList = JSON.parse(usersListJson);
      return !isNullOrUndefined(usersList.find(u => u.email == user.email && u.password == user.password));
    }

    return false;
  }

  setLoggedInUser(user): void {
    localStorage.setItem("user", JSON.stringify(user));
  }
}
