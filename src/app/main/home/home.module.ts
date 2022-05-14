import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { AdminComponent } from './admin/admin.component';
import { DevComponent } from './dev/dev.component';
import { StaffComponent } from './staff/staff.component';

@NgModule({
  declarations: [
    AdminComponent,
    DevComponent,
    StaffComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
