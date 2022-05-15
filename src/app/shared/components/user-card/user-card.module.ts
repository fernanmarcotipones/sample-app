import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card.component';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [UserCardComponent],
  exports: [UserCardComponent],
  imports: [
    CommonModule,
    PipesModule,
  ]
})
export class UserCardModule { }
