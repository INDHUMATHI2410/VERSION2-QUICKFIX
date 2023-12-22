import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanActivateChild{
  constructor(private loginService:LoginService,private router:Router){}
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // throw new Error('Method not implemented.');
    if(!this.loginService.isAdminUser()){
      alert("you are not admin and not allowed to edit the product");
      return false;
    }
    return true;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    if(!this.loginService.isUserLoggedIn()){
      alert('You want to login');
      this.router.navigate(["loginPage"],{queryParams:{retUrl:route.url}});
      return false;
    }
    else{
      return true;
    }
  }
  
}


