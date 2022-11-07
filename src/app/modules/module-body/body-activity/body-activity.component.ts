import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { MessageService } from 'src/app/services/message.service';
import { StudentService } from './body-activity-student/student.service';

@Component({
  selector: 'app-body-activity',
  templateUrl: './body-activity.component.html',
  styleUrls: ['./body-activity.component.scss']
})
export class BodyActivityComponent implements OnInit {

  constructor(private studentService: StudentService, public messageService: MessageService) { }

  insertStudent(student: Student){
    this.studentService.Students.push({
      id: this.studentService.id = this.studentService.id + 1,
      lastName: student.lastName,
      firstName: student.firstName,
      age: student.age,
      city: student.city,
      faculty: student.faculty,
      speciality: student.speciality
    })
    this.messageService.addMessage('Ajouté !')
  }

  ngOnInit(): void {
  }

/* ------------------- Recuperation des données du formulaire -------------------*/
 /*lastNameFromFrom!: string;
  firstNameFromForm!: string;
  ageFromForm!: number;
  cityFromForm!: string;
  facultyFromForm!: string;
  specialityFromForm!: string;

  receiveLastNameFromForm($event : any){this.lastNameFromFrom = $event;}

  receiveFirstNameFromForm($event : any){this.firstNameFromForm = $event;}

  receiveAgeFromForm($event : any){this.ageFromForm = $event;}

  receiveCityFromForm($event : any){this.cityFromForm = $event;}

  receiveFacultyFromForm($event : any){this.facultyFromForm = $event;}

  receiveSpecialityFromForm($event : any){this.specialityFromForm = $event;}*/
}
