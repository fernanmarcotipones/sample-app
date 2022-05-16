import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  public user!: User;

  constructor(
    private authService: AuthService,
  ) { }

  public ngOnInit(): void {
    this.authService.getCurrentUser()
    .then(user => this.user = user);
  }

  public saveUser(newData: User) {
    
  }

}
