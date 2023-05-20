import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitComponent } from './init.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { LessonComponent } from './pages/lesson/lesson.component';
import { ScholarshipComponent } from './pages/scholarship/scholarship.component';
import { WebinarComponent } from './pages/webinar/webinar.component';

const routes: Routes = [
  {
    path: '',
    component: InitComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'cursos',
        component: CoursesComponent,
      },
      {
        path: 'becas',
        component: ScholarshipComponent,
      },
      {
        path: 'webinars',
        component: WebinarComponent,
      },
      {
        path: 'cursos/leccion',
        component: LessonComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
