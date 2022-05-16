import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MenuComponent } from './menu/menu.component';
import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
import { MyProfileModule } from './my-profile/my-profile.module';
import { UserDetailsModule } from './user-details/user-details.module';

@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HomeModule,
    UsersModule,
    MyProfileModule,
    UserDetailsModule,
  ]
})
export class MainModule { }
