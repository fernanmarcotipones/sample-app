import { Component, OnInit } from '@angular/core';
import { clone } from 'lodash';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users!: User[];

  public usersPagination!: User[];

  public activePage: number = 1;

  public pages: number = 1;

  public pageLimit: number = 9;

  constructor(
    private userService: UserService,
  ) { }

  public ngOnInit(): void {
    this.users = clone(this.userService.userData);
    this.setupPagination();
  }

  public setActivePage(page: number) {
    this.activePage = page;
    this.setupPagination();
  }

  private setupPagination(): void {
    this.usersPagination = clone(this.users);
    this.pages = Math.ceil(this.users.length / this.pageLimit);

    if (this.users.length <= this.pageLimit) {
      return;
    }
    
    const start = this.pageLimit * (this.activePage - 1);
    const end = this.pageLimit * this.activePage;
    this.usersPagination = this.usersPagination.slice(start, end);
  }

}
