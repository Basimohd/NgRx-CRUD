import { createReducer } from "@ngrx/store";
import { User } from "./user";

export const intitialState: ReadonlyArray<User> = [
    {
        "id": 1,
        "name": "Basim Mohamemed",
        "age": 15,
        "email": "basimohammedkt@gmail.com"
    }
];

export const userReducer = createReducer(
    intitialState
)