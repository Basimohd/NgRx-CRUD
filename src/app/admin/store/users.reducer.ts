import { createReducer, on } from "@ngrx/store";
import { User } from "./user";
import { UserAPISuccess, UserSaveAPISuccess } from "./users.action";

export const intitialState: ReadonlyArray<User> = [];

export const userReducer = createReducer(
    intitialState,
    on(UserAPISuccess,(_state,{allUsers})=>{
        return allUsers;
    }),
    on(UserSaveAPISuccess,(state,{response})=>{
        let newState = [...state]
        newState.unshift(response)
        return newState;
    })
)