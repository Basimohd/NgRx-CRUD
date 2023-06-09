import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AddUsersComponent } from './add-users/add-users.component';

const routes: Routes = [
  {path:'userlist',component:UsersComponent},
  {path:'adduser',component:AddUsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
