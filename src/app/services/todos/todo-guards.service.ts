import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoGuardsService implements CanDeactivate<boolean>, CanActivate {

  canDeactivate(component: boolean, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return confirm(`Are u sure go from ${currentState.url} to ${nextState?.url}`);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return +route.params.id > 0 && +route.params.id <= 200;
  }
}
