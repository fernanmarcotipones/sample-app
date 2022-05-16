import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cloneDeep } from 'lodash';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  public user!: User;
  
  public userId!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
  ) {}

  public ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.getUserdata();
  }

  public async getUserdata(): Promise<void> {
    if (!this.userId) {
      return;
    }

    this.user = await this.userService.getUser(this.userId);
  }

  public saveUser(newData: User): void {
    this.userService.updateUser(newData);
    this.getUserdata();
  }

  public cancel(): void {
    this.router.navigate(['main/users']);
  }

}
