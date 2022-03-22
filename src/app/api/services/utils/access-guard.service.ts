import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import { StorageService } from './storage.service';
import {JwtHelperService} from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class AccessGuardService implements CanActivate {
  private jwtHelper=new JwtHelperService();

  constructor(
    private storageService: StorageService,
    private router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isTokenValid=this.isTokenValid();
    if(!isTokenValid){
      //todo
      localStorage.clear();
      this.router.navigate(['/login']);

    }
    return isTokenValid;
  }
  private isTokenValid(): boolean {
    if(this.storageService.getToken()){
      return !this.jwtHelper.isTokenExpired(this.storageService.getToken());
    }
    return false;
  }
}
