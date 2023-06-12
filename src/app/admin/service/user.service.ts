import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../store/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<User[]>("http://localhost:3000/users")
  }
  saveUser(payLoad:User){
    return this.http.post<User>("http://localhost:3000/users",payLoad)
  }
  update(payLoad:User){
    console.log(payLoad)
    return this.http.put<User>(`http://localhost:3000/users/${payLoad.id}`,payLoad);
  }
}
