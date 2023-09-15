import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { coursesResolver } from './services/course.resolver';
import { DelayResolver } from '../shared/delay.resolve';


const routes: Routes = [
  {
    path:"", component:HomeComponent
  },
  {
    path:":courseurl",
    component: CourseComponent,
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
