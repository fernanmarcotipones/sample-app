import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserType } from '../models/user';
import { UserService } from '../services/user.service';

@Injectable()
export class UserGuard implements CanActivate {

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
      return false
    }

    this.userService.getUser(userId)
    .then(user => {
      if (!user) {
        this.router.navigate(['public/login']);
        return false
      }
  
      switch(user.type) {
        case UserType.Admin:
          this.router.navigate(['main/home/admin']);
          break;
        case UserType.Dev:
          this.router.navigate(['main/home/dev']);
          break;
        case UserType.Staff:
          this.router.navigate(['main/home/staff']);
          break;
        default:
          this.router.navigate(['public/login']);
          break;
      }
      
      return true;
    });

    return true;
  }
}
