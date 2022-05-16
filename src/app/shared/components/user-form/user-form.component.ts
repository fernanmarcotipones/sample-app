import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { User, USER_TYPE_SELECT } from 'src/app/models/user';

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

  public userTypes = cloneDeep(USER_TYPE_SELECT);

  @Output()
  public onSave = new EventEmitter<User>();

  @Output()
  public onCancel = new EventEmitter<void>();

  constructor() { }

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
