import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BodyActivityComponent } from './body-activity/body-activity.component';
import { DisplayStudentComponent } from './body-activity/body-activity-student/display-student/display-student.component';
import { DisplayStudentAdditionalInformationComponent } from './body-activity/body-activity-student/display-student/display-student-additional-information/display-student-additional-information.component';
import { CreateStudentComponent } from './body-activity/body-activity-student/create-student-form/create-student.component';



@NgModule({
    imports: [CommonModule],
    exports: [BodyActivityComponent],
    declarations: [
    BodyActivityComponent,
    DisplayStudentComponent,
    DisplayStudentAdditionalInformationComponent,
    CreateStudentComponent
  ],
    providers: [],
})
export class BodyModule { }
