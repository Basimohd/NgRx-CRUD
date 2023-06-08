import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/users.reducer';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    StoreModule.forFeature("users",userReducer)
  ]
})
export class AdminModule { }
