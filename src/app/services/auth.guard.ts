import { inject } from "@angular/core";
import { AuthStore } from "./auth.store";
import { Router } from "express";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot,state: RouterStateSnapshot) : Observable<boolean | UrlTree> => {
    const authStore = inject(AuthStore);
    const router = inject(Router);

    return authStore.isLoggedIn$.pipe(map(loggedIn => loggedIn ? true: router.parseUrl('/login')));
}