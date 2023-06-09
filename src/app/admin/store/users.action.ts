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