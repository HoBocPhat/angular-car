import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  roles: string[] = [];
  constructor(private tokenStorage: TokenStorageService,
    private router: Router,
    private authService: AuthService
){

}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.isLoggedIn){
      this.roles = this.tokenStorage.getUser().roles;
      if(this.roles[1] === "ROLE_ADMIN"){
        return true;
      }}
    this.router.navigate(['/trangchu']);
    return false;
  }

}
