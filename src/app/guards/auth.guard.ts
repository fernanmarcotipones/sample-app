import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private router: Router,
  ) { }

  public canActivate(): boolean {
    return this.isAuthorized();
  }

  public canLoad(): boolean {
    return this.isAuthorized();
  }

  private isAuthorized(): boolean {
    const userId = window.localStorage.getItem('sample-userId');
    if (!userId) {
      this.router.navigate(['public/login']);
      return false;
    }
    return true;
  }
}
