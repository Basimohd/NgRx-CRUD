import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/users.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/users.effects';
import { HttpClientModule } from '@angular/common/http';
import { AddUsersComponent } from './add-users/add-users.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersComponent,
    AddUsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    HttpClientModule,
    StoreModule.forFeature("users",userReducer),
    EffectsModule.forFeature([UsersEffects])
  ]
})
export class AdminModule { }
