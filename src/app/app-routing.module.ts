import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, UrlSerializer} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DelayResolver } from './shared/delay.resolve';


const routes: Routes = [
  {
    path:"", redirectTo:"/about", pathMatch:"full"
  },
  {
    path:"courses",
    loadChildren: () => import("./courses/courses.module").then(module => module.CoursesModule)
  },
  {
    path:"about",
    component: AboutComponent,
    resolve: [DelayResolver]
  },
  {
    path:"login",
    component: LoginComponent,
    resolve: [DelayResolver]
  },
  {
    path:"**",
    component:PageNotFoundComponent,
    resolve: [DelayResolver]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [

  ]
})
export class AppRoutingModule {


}
