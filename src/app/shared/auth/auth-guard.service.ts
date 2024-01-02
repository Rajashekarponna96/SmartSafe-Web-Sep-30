import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  // constructor(private authService: AuthService) {}

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   return this.authService.isAutheticated();
  // }
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const expectedRoles = route.data.expectedRoles;

    if (!this.authService.isAutheticated() || !this.authService.hasRoles(expectedRoles)) {
      // User is not authenticated or does not have the required roles
      this.router.navigate(['/unauthorized']); // Redirect to an unauthorized page or login page
      return false;
    }

    return true;}}