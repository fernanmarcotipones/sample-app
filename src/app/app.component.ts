import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public userDataSub!: Subscription;

  constructor(
    private userService: UserService,
  ) { }

  public ngOnInit(): void {
    this.userDataSub = this.userService.getAllUsers()
    .subscribe(users => this.userService.setUserData(users));
  }

  public ngOnDestroy(): void {
    this.userDataSub.unsubscribe();
  }
}
