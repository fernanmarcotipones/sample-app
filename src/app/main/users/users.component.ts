import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cloneDeep } from 'lodash';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users!: User[];

  public usersPagination!: User[];

  public currentUserId!: string;

  public activePage: number = 1;

  public pages: number = 1;

  public pageLimit: number = 9;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
  ) { }

  public ngOnInit(): void {
    this.users = cloneDeep(this.userService.userData);
    this.currentUserId = this.authService.currentUserId;
    this.setupPagination();
  }

  public setActivePage(page: number): void {
    this.activePage = page;
    this.setupPagination();
  }

  public editUser(userId: string): void {
    if (this.currentUserId === userId) {
      this.router.navigate(['main/my-profile']);
    } else {
      this.router.navigate(['main/user-details/', userId]);
    }
  }

  public deleteUser(userId: string): void {
   const isConfirmed = confirm("Are you sure you want to delete this user ?");
    
    if(isConfirmed) {
      // Delete method here
      this.setupPagination();
    }
  }

  private setupPagination(): void {
    this.usersPagination = cloneDeep(this.users);
    this.pages = Math.ceil(this.users.length / this.pageLimit);

    if (this.users.length <= this.pageLimit) {
      return;
    }
    
    const start = this.pageLimit * (this.activePage - 1);
    const end = this.pageLimit * this.activePage;
    this.usersPagination = this.usersPagination.slice(start, end);
  }

}
