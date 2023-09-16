import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { LessonSummary } from "../model/lesson-summary";
import { CoursesService } from "./courses.service";
import { inject } from "@angular/core";

export const lessonsResolver: ResolveFn<LessonSummary[]> = 
(route: ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
    const courseurl = route.paramMap.get("courseurl");
    return inject(CoursesService).loadAllCourseLessonsSummary(courseurl);
};