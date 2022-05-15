import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserCardModule } from 'src/app/shared/components/user-card/user-card.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UserCardModule,
  ]
})
export class UsersModule { }
