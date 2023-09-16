import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { LessonDetail } from "../model/lesson-detail";
import { CoursesService } from "./courses.service";
import { inject } from "@angular/core";

export const lessonDetailResolver: ResolveFn<LessonDetail> = 
( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => 
{
    const courseurl = route.parent.paramMap.get("courseurl");
    const lessSeqNo = route.paramMap.get("lessonSeqNo");
    return inject(CoursesService).loadLessonDetail(courseurl,lessSeqNo);
}