import { Component } from '@angular/core';
import { User } from '../store/user';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { selectUserById } from '../store/users.selector';
import { invokeUpdateUser } from '../store/users.action';
import { Appstate } from 'src/app/shared/store/appstate';
import { selectAppState } from 'src/app/shared/store/app.selector';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent {
  constructor(private store: Store,
    private route : ActivatedRoute,
    private router: Router,
    private appStore:Store<Appstate>
    ){}
  UserForm: User = {
    id: 0,
    name: '',
    email: '',
    age: 0
  }
  ngOnInit(){
    let fetchUserById$ = this.route.paramMap.pipe(
      switchMap((param)=>{
        let  id = Number(param.get('id'));
        return this.store.pipe(select(selectUserById(id)))
      })
    )
    fetchUserById$.subscribe((data)=>{
      console.log(data);
      
      if(data){
        this.UserForm = {...data}
      }else{
        this.router.navigate(['/admin/userlist'])
      }
    })
  }
  onSubmit(){
    this.store.dispatch(invokeUpdateUser({payload:{...this.UserForm}}));
    let appStatus$ = this.appStore.pipe(select(selectAppState));
    appStatus$.subscribe((data)=>{
      if(data.apiStatus == 'success'){
        this.router.navigate(['/admin/userlist'])
      }
    })
  }
  }
