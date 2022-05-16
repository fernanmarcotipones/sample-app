import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { UserFormComponent } from './user-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserFormComponent],
  exports: [UserFormComponent],
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
  ]
})
export class UserFormModule { }
