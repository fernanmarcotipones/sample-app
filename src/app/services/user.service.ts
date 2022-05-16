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
    if (!this.userData?.length) {
      this.userData = await lastValueFrom(this.getAllUsers(), {defaultValue: []});
    }
    const user = this.userData.find(user => user.id === id);
    return user ? user : clone(DEFAULT_USER);
  }

  public updateUser(newData: User): void {
    if (newData) {
      const i = this.userData.findIndex(user => user.id === newData.id);
      this.userData[i] = cloneDeep(newData);
    }
  }

  public deleteUser(userId: string): void {
    this.userData = this.userData.filter(user => user.id !== userId);
  }
}