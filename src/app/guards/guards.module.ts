import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { UserGuard } from './user.guard';
import { AdminGuard } from './admin.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthGuard,
    UserGuard,
    AdminGuard,
  ],
})
export class GuardsModule { }
