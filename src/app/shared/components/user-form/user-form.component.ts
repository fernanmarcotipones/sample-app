import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { User, UserType, USER_TYPE_SELECT } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, OnChanges {

  @Input()
  public user!: User;

  @Input()
  public showCancel: boolean = true;

  public localUser!: User;

  public userTypesOptions = cloneDeep(USER_TYPE_SELECT);

  public userType = UserType;

  @Output()
  public onSave = new EventEmitter<User>();

  @Output()
  public onCancel = new EventEmitter<void>();

  public get isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  constructor(
    private authService: AuthService,
  ) { }

  public ngOnInit(): void {
  }

  public ngOnChanges(): void {
    this.localUser = cloneDeep(this.user);
  }

  public save(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const newUserData = cloneDeep(this.localUser);
    this.onSave.emit(newUserData);
  }

  public cancel(): void {
    this.onCancel.emit();
  }

}
