import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasRoleDirective } from './auth/has-role.directive';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HasRoleDirective, HasRoleDirective],
  exports: [HasRoleDirective]
})
export class SharedDirectivesModule { }
