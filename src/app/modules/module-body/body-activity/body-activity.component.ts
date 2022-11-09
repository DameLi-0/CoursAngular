import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-body-activity',
  templateUrl: './body-activity.component.html',
  styleUrls: ['./body-activity.component.scss']
})
export class BodyActivityComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }


  addStudent(student: Student){this.studentService.student.push({
    lastName: student.lastName,
    firstName: student.firstName,
    age: student.age,
    city: student.city,
    faculty: student.faculty,
    speciality: student.speciality
  })}

  // lastNameFromFrom!: string;
  // firstNameFromForm!: string;
  // ageFromForm!: number;
  // cityFromForm!: string;
  // facultyFromForm!: string;
  // specialityFromForm!: string;

  // receiveLastNameFromForm($event : any){this.lastNameFromFrom = $event;}

  // receiveFirstNameFromForm($event : any){this.firstNameFromForm = $event;}

  // receiveAgeFromForm($event : any){this.ageFromForm = $event;}

  // receiveCityFromForm($event : any){this.cityFromForm = $event;}

  // receiveFacultyFromForm($event : any){this.facultyFromForm = $event;}

  // receiveSpecialityFromForm($event : any){this.specialityFromForm = $event;}

  
}
