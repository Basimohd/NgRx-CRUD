import { createAction, props } from "@ngrx/store";
import { User } from "./user";

export const invokeUser = createAction(
    "[User API] invoke users fetch API"
)

export const UserAPISuccess = createAction(
    "[User API] invoke users Successed",
    props<{allUsers:User[]}>()
)
export const invokeSaveUser = createAction(
    "[User Save API] invoke user Add API",
    props<{payload:User}>()
)
export const UserSaveAPISuccess = createAction(
    "[User Save API] invoke user Added Success",
    props<{response:User}>()
)
export const invokeUpdateUser = createAction(
    "[User Update API] invoke user Update API",
    props<{payload:User}>()
)
export const updateUserSuccessAPI = createAction(
    "[User Update API] user Update API Success ",
    props<{response:User}>()
)
export const invokeDeleteUser = createAction(
    "[User Delete API] invoke user Delete API",
    props<{id:Number}>()
)
export const deleteUserSucces = createAction(
    "[User Delete API] user Delete API Success ",
    props<{id:Number}>()
)