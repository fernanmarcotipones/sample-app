import { Injectable } from "@angular/core";
import { clone } from "lodash";
import { DEFAULT_USER, User } from "../models/user";
import { UserService } from "./user.service";

@Injectable()
export class AuthService {
  public currentUser!: User;

  constructor(private userService: UserService) {}

  public login(username: string, password: string): boolean {
    const userData = this.userService.userData;
    const user = userData.find(user => user.username === username);

    if (!user || user?.password !== password) { 
      return false;
    }

    window.localStorage.setItem('userId', user.id);
    this.currentUser = user;
    return true;
  }

  public logout(): void {
    this.currentUser = clone(DEFAULT_USER);
    window.localStorage.removeItem('userId');
  }
}