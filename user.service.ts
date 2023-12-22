import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http:HttpClient) { }
  url:any="http://localhost:3000/userProfile";

  addUserInformation(body:any){
  return this.http.post(this.url,body)
  }

  adduser(body:any){
  return this.http.post(this.url,body)
  }

  retrieveUser(){
  return this.http.get(this.url);
  }

  retrieveOneUser(id:any){
  return this.http.get(this.url+"/"+id);
  }

  deleteUser(id:any){
  return this.http.delete(this.url,id);
  }

  updateUser(id:any,data:any){
  return this.http.patch(this.url+"/"+id,data);
  }

  // isLogge
  //   this.isLoggedIn.next(false);
  // }
  // loginUser() {
  //   this.isLoggedIn.next(true);
  // }

}
