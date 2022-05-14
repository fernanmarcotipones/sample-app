import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,) { }

  public ngOnInit(): void {
  }

  public login(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    
    this.router.navigate(['/main']);
  }

}
