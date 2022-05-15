import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DevComponent } from './dev/dev.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'dev', component: DevComponent },
  { path: 'staff', component: StaffComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
