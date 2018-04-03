import { Injectable } from '@angular/core';
import { CanLoad, Route, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { NzNotificationService } from 'ng-zorro-antd';
@Injectable()
export class LoginCanLoadGuard implements CanLoad, CanActivate {
    constructor(private _notification: NzNotificationService) { }
    canLoad(
        route: Route
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (localStorage.getItem("username")) {
            return true;
        } else {
            this._notification.create("info", '友情提示', '您需要登录才能进行下一步操作！');
        }

    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        if (localStorage.getItem("username")) {
            return true;
        } else {
            this._notification.create("info", '友情提示', '您需要登录才能进行下一步操作！');
            return false;
        }

    }
}
