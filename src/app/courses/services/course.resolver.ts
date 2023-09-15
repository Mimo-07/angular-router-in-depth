import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Course } from "../model/course";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { CoursesService } from "./courses.service";

export const coursesResolver: ResolveFn<Course> =
    (route:ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        const courseurl = route.paramMap.get("courseurl");
        return inject(CoursesService).loadCourseByUrl(courseurl);
    }

