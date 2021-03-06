import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile.component';
import { UserFormModule } from 'src/app/shared/components/user-form/user-form.module';
import { UserCardModule } from 'src/app/shared/components/user-card/user-card.module';

@NgModule({
  declarations: [MyProfileComponent],
  imports: [
    CommonModule,
    UserFormModule,
    UserCardModule,
  ]
})
export class MyProfileModule { }
