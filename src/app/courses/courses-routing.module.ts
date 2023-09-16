import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { coursesResolver } from './services/course.resolver';
import { DelayResolver } from '../shared/delay.resolve';
import { LessonDetailComponent } from './lesson/lesson-detail.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { lessonsResolver } from './services/lessons.resolver';
import { lessonDetailResolver } from './services/lessondetail.resolver';


const routes: Routes = [
  {
    path:"", component:HomeComponent
  },
  {
    path:":courseurl",
    component: CourseComponent,
    children: [
      {
        path:"",
        component:LessonsListComponent,
        pathMatch:"full",
        resolve:{
          lessons:lessonsResolver
        }
      },
      {
        path:"lessons/:lessonSeqNo",
        component: LessonDetailComponent,
        resolve:{
          lessonDetail: lessonDetailResolver
        }   
      }
    ],
    resolve: {
      course: coursesResolver,
      delay: DelayResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [

  ]
})
export class CoursesRoutingModule {



}
