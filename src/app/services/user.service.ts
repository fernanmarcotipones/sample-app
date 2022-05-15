import { Injectable } from "@angular/core";
import { DEFAULT_USER, User } from "../models/user";
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from "rxjs";
import { clone, cloneDeep } from "lodash";

@Injectable()
export class UserService {

  public userData!: User[];

  constructor(private httpClient: HttpClient) {}

  public getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>("assets/data/users.json");
  }

  public setUserData(data: User[]): void {
    this.userData = cloneDeep(data);
  }

  public async getUser(id: string): Promise<User> {
    if (!this.userData) {
      this.userData = await lastValueFrom(this.getAllUsers(), {defaultValue: []});
    }
    const user = this.userData.find(user => user.id === id);
    return user ? user : clone(DEFAULT_USER);
  }
}