import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth/auth-service.service';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  
  constructor(
    private router: Router,
    private authRequest: AuthServiceService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean | Observable<boolean> {
    console.log(route);

    return this.authRequest.hasLoggedUser().pipe(map((autenticated) => {
      if(!autenticated) {
        this.router.navigate(['login']);
        return false;
      }
      return true;
    }));
  }
}
