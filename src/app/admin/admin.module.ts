import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { InitComponent } from './init.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { LanguageProgressBarComponent } from './components/language-progress-bar/language-progress-bar.component';
import { LevelProgressBarComponent } from './components/level-progress-bar/level-progress-bar.component';
import { StarNumberComponent } from './components/star-number/star-number.component';
import { RowCardCourseComponent } from './components/row-card-course/row-card-course.component';
import { LessonComponent } from './pages/lesson/lesson.component';
import { ScholarshipComponent } from './pages/scholarship/scholarship.component';
import { WebinarComponent } from './pages/webinar/webinar.component';

@NgModule({
  declarations: [InitComponent, CardComponent, DashboardComponent, CoursesComponent, LanguageProgressBarComponent, LevelProgressBarComponent, StarNumberComponent, RowCardCourseComponent, LessonComponent, ScholarshipComponent, WebinarComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
