import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserType } from '../models/user';
import { UserService } from '../services/user.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  /**
   * Checks for user session and redirects to login if none.
   */
  public canActivate(): boolean {
    const userId = window.localStorage.getItem('sample-userId');
    
    if (!userId) {
      this.router.navigate(['public/login']);
      return false;
    }

    this.userService.getUser(userId)
    .then(user => {
      if (!user) {
        this.router.navigate(['public/login']);
        return false;
      }

      if (user.type !== UserType.Admin) {
        this.router.navigate(['main/home']);
        return false;
      }
      
      return true;
    });

    return true;
  }
}
