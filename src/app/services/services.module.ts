import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthService } from "./auth.service";
import { UserService } from "./user.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    UserService,
  ]
})
export class ServicesModule { }