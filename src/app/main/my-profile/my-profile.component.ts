import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  public user!: User;

  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) { }

  public ngOnInit(): void {
    this.fetchUserData();
  }

  public saveUser(newData: User) {
    this.userService.updateUser(newData);
    this.fetchUserData();
  }

  private fetchUserData(): void {
    this.authService.getCurrentUser()
    .then(user => this.user = user);
  }

}
