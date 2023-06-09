import { Component } from '@angular/core';
import { User } from '../store/user';
import { Store, select } from '@ngrx/store';
import { invokeSaveUser } from '../store/users.action';
import { Appstate } from 'src/app/shared/store/appstate';
import { selectAppState } from 'src/app/shared/store/app.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent {
  constructor(private store: Store,
    private appStore:Store<Appstate>,
    private router:Router) { }
  UserForm: User = {
    id: 0,
    name: '',
    email: '',
    age: 0
  }
  onSubmit() {
    this.store.dispatch(invokeSaveUser({ payload: this.UserForm }))
    let appStatus$ = this.appStore.pipe(select(selectAppState));
    appStatus$.subscribe((data)=>{
      
      if(data.apiStatus == 'success'){
        console.log("mone")
        this.router.navigate(['/admin/userlist'])
      }
    })
  }
}
