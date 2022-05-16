import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details.component';
import { UserFormModule } from 'src/app/shared/components/user-form/user-form.module';

@NgModule({
  declarations: [
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserFormModule,
  ]
})
export class UserDetailsModule { }
