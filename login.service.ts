import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn:boolean=false;
  isadmin:boolean=false;
  userName:any="";
  password:any="";
  constructor(public http:HttpClient) { }
  userLoggedIn(u:any,p:any){
    this.userName=u;
    this.password=p;
    this.isLoggedIn=true;
    return of(this.isLoggedIn);
  }

  isUserLoggedIn(){
    return this.isLoggedIn;
  }
  isAdminUser():boolean{
    console.log("un"+this.userName)
    if(this.userName=="admin"){
      return true;
    }
    return true;
  }
  sendemail(url:any,data:any){
    return this.http.post(url,data);
      }
  userLogOut():void{
    this.isLoggedIn=false;
  }
  userloggedOut(){
    this.isLoggedIn=false;
  }
  adminloggedout(){
    this.isadmin=false;
  }
}
