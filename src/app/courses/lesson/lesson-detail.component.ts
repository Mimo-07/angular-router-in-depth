import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {LessonDetail} from "../model/lesson-detail";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'lesson',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {

  lesson$: Observable<LessonDetail>;

  constructor(private route: ActivatedRoute, private router: Router) {

    console.log("Created LessonDetailComponent...");

  }

  ngOnInit() {
    //this.lesson = this.route.snapshot.data["lessonDetail"];
    this.lesson$ = this.route.data.pipe(map(data => data["lessonDetail"]));
  }

  Previous(lesson: LessonDetail)
  {
    //http://localhost:4200/courses/angular-router-course/lessons/5
    this.router.navigate(['lessons', lesson.seqNo - 1], {relativeTo: this.route.parent});
  }

  Next(lesson: LessonDetail)
  {
    this.router.navigate(['lessons', lesson.seqNo + 1], {relativeTo: this.route.parent});
  }



}
