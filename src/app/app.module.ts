import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './courses/courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesCompenent } from './courses/courses.compnent';
import { CourseComponent } from './course/course.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star/star.component';
@NgModule({
  declarations: [
    AppComponent,
    CoursesCompenent,
    CourseComponent,
    SummaryPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
