import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { cloneDeep } from "lodash";

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
}