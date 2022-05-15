import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username!: string;

  public password!: string;

  public showInvalidText: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  public ngOnInit(): void {
  }

  public login(form: NgForm): void {
    this.showInvalidText = false;

    if (form.invalid) {
      return;
    }

    const isLoggedIn = this.authService.login(this.username, this.password);

    if (!isLoggedIn) {
      this.showInvalidText = true;
      return;
    }

    this.router.navigate(['/main']);
  }

}
