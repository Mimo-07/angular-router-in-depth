import { ResolveFn } from "@angular/router";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

export const DelayResolver: ResolveFn<any> = () => {
    return of('delayed navigation').pipe(delay(2000));
}