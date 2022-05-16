import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { UserFormComponent } from './user-form.component';
import { FormsModule } from '@angular/forms';
import { ValidatorsModule } from '../../validators/validators.module';

@NgModule({
  declarations: [UserFormComponent],
  exports: [UserFormComponent],
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    ValidatorsModule,
  ]
})
export class UserFormModule { }
