import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectUser } from '../store/users.selector';
import { invokeDeleteUser, invokeUser } from '../store/users.action';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{
  constructor(private store:Store){}

  users$ = this.store.pipe(select(selectUser))
  ngOnInit():void{
    this.store.dispatch(invokeUser())
  }
  onDelete(id:Number){
    this.store.dispatch(invokeDeleteUser({id:id}))
    this.users$ = this.store.pipe(select(selectUser))
  }
}
