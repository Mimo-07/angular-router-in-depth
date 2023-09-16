import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Course } from "../model/course";
import { inject } from "@angular/core";
import { CoursesService } from "./courses.service";

export const coursesResolver: ResolveFn<Course> =
    (route:ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        const courseurl = route.paramMap.get("courseurl");
        return inject(CoursesService).loadCourseByUrl(courseurl);
    }

