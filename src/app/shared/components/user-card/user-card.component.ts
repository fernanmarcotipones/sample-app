import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input()
  public user!: User;

  @Input()
  public allowEdit: boolean = true;

  @Input()
  public allowDelete: boolean = true;

  @Input()
  public showActions: boolean = true;

  @Output()
  public onEdit = new EventEmitter<string>();

  @Output()
  public onDelete = new EventEmitter<string>();

  constructor() { }

  public ngOnInit(): void {
  }

  public editUser(userId: string): void {
    if (!this.allowEdit) {
      return;
    }

    this.onEdit.emit(userId);
  }

  public deleteUser(userId: string): void {
    if (!this.allowDelete) {
      return;
    }

    this.onDelete.emit(userId);
  }

}
