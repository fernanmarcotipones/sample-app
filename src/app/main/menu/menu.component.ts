import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    ) { }

  public ngOnInit(): void {
  }

  public logout(): void {
    const isConfirmed = confirm("Are you sure you want to logout ?");
    
    if(isConfirmed) {
      this.authService.logout();
      this.router.navigate(['/login']);
    }
  }

}
