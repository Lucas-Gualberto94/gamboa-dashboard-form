import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthLoginService } from '../services/auth-login.service';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(private router: Router, private authLoginService: AuthLoginService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const userIsLoggedIn = true;
     // const userIsLoggedIn = this.authLoginService.getIsAuthenticated();

    if (userIsLoggedIn) {
      return true;
    } else {

      this.router.navigate(['']);
      return false;
    }
  }

}
