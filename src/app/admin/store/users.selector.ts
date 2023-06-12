import { createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "./user";

export const selectUser = createFeatureSelector<User[]>("users")

export const selectUserById = (UserId:Number)=>{
    return createSelector(selectUser,(users:User[])=>{
        let UserById = users.filter((user)=> user.id === UserId)
        if(UserById.length == 0){
            return null
        }
        
        return UserById[0]
    })
}