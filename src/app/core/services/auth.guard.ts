import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from './user.service';
import {take} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.userService.isAuthenticated.pipe(take(1)).subscribe(isAuth => {
      if (!isAuth) {
        this.router.navigate(['login']);
      }
    });

    return true;
  }
}
