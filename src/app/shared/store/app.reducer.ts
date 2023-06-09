import { createReducer, on } from "@ngrx/store";
import { Appstate } from "./appstate";
import { setAPIStatus } from "./app.action";

export const initialState:Appstate ={
    apiResponse : '',
    apiStatus : ''
} 
export const appReducer = createReducer(
    initialState,
    on(setAPIStatus,(_state,{apiStatus})=>{
        return apiStatus
    })
)