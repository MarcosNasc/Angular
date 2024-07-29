import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, GuardResult, MaybeAsync, Route, RouterStateSnapshot, UrlSegment } from "@angular/router";

@Injectable()
export class AuthGuard implements CanLoad , CanActivate{
    user = 
    {
        admin: true,
        logged: true
    }

    canLoad() : boolean{
       return this.user.admin;
    }

    canActivate() : boolean {
        return this.user.logged;
    }
}