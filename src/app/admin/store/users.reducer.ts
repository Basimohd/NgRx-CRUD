import { createReducer, on } from "@ngrx/store";
import { User } from "./user";
import { UserAPISuccess, UserSaveAPISuccess, deleteUserSucces, updateUserSuccessAPI } from "./users.action";

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
    }),
    on(updateUserSuccessAPI,(state,{response})=>{
        let newState = state.filter(user=>user.id !== response.id)
        newState.unshift(response)
        return newState;
    }),
    on(deleteUserSucces,(state,{id})=>{
        let newState = state.filter(user=>user.id !== id) 
        return newState;
    })
)