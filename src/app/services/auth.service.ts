import { Injectable } from "@angular/core";
import { clone } from "lodash";
import { DEFAULT_USER, User, UserType } from "../models/user";
import { UserService } from "./user.service";

@Injectable()
export class AuthService {
  public currentUser!: User;

  public currentUserId!: string;

  constructor(private userService: UserService) {
    const userId = window.localStorage.getItem('sample-userId');
    this.currentUserId = userId ? userId : '';
    if (userId && !this.currentUser) {
      this.userService.getUser(userId).then(user => this.currentUser = user);
    }
  }

  public login(username: string, password: string): boolean {
    const userData = this.userService.userData;
    const user = userData.find(user => user.username === username);

    if (!user || user?.password !== password) { 
      return false;
    }

    window.localStorage.setItem('sample-userId', user.id);
    this.currentUser = user;
    this.currentUserId = user.id;
    return true;
  }

  public logout(): void {
    this.currentUser = clone(DEFAULT_USER);
    this.currentUserId = '';
    window.localStorage.removeItem('sample-userId');
  }

  public isAdmin(): boolean {
    return this.currentUser?.type === UserType.Admin;
  }

  public async getCurrentUser(): Promise<User> {
    const user = await this.userService.getUser(this.currentUserId);

    if (!user) {
      return clone(DEFAULT_USER);
    }

    this.currentUser = user;
    return user;
  }
}