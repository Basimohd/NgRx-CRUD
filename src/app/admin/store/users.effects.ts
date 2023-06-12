import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../service/user.service";
import { UserAPISuccess, UserSaveAPISuccess, invokeSaveUser, invokeUpdateUser, invokeUser, updateUserSuccessAPI } from "./users.action";
import { map, switchMap,tap,withLatestFrom,EMPTY } from "rxjs";
import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Appstate } from "src/app/shared/store/appstate";
import { setAPIStatus } from "src/app/shared/store/app.action";
import { selectUser } from "./users.selector";

@Injectable()
export class UsersEffects {
constructor(private action$: Actions, 
    private UserService: UserService,
    private appStore: Store<Appstate>,
    private store:Store){

}

loadUsers$ = createEffect(()=>
     this.action$.pipe(
        ofType(invokeUser),
        withLatestFrom(this.store.pipe(select(selectUser))),
        switchMap(([,usersFromStore])=>{
            if(usersFromStore.length>0){
                return EMPTY;
            }
            return this.UserService
            .getUsers().pipe(tap((d)=>{
                 console.log(d)
            }),map((data => UserAPISuccess({allUsers : data}))))
        })
    )
    )
saveUser$ = createEffect(()=>
        this.action$.pipe(
            ofType(invokeSaveUser),
            switchMap((action)=>{
                this.appStore.dispatch(setAPIStatus({apiStatus:{apiResponse:'',apiStatus:''}}))
                return this.UserService
                .saveUser(action.payload).pipe(
                    map((data => {
                        this.appStore.dispatch(setAPIStatus({apiStatus:{apiResponse:'',apiStatus:'success'}}))
                        return UserSaveAPISuccess({response:data})
                    }))
                )
            })
        )
)
updateUser$ = createEffect(()=>
        this.action$.pipe(
            ofType(invokeUpdateUser),
            switchMap((action)=>{
                this.appStore.dispatch(setAPIStatus({apiStatus:{apiResponse:'',apiStatus:''}}))
                return this.UserService
                .update(action.payload).pipe(
                    map((data => {
                        this.appStore.dispatch(setAPIStatus({apiStatus:{apiResponse:'',apiStatus:'success'}}))
                        return updateUserSuccessAPI({response:data})
                    }))
                )
            })
        )
)
}
