import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {
speciality: any;

  constructor() { }

  ngOnInit(): void {
  }

/* ----------------------------------------OUTPUT--------------------------------------- */

  @Output() sendStudentToMainEvent = new EventEmitter<Student>();
  sendStudentToMain(lastName: string, firstName: string, age: number, city: string, faculty: string, speciality: string){this.sendStudentToMainEvent.emit({
      lastName: lastName,
      firstName: firstName,
      age: age,
      city: city,
      faculty: faculty,
      speciality: speciality,
    });
  }
  
  // @Output() sendLastNameToMainEvent = new EventEmitter<string>();
  // sendLastNameToMain(){this.sendLastNameToMainEvent.emit(this.lastNameFromFrom);}

  // @Output() sendFirstNameToMainEvent = new EventEmitter<string>();
  // sendFirstNameToMain(){this.sendFirstNameToMainEvent.emit(this.firstNameFromForm);}

  // @Output() sendAgeToMainEvent = new EventEmitter<number>();
  // sendAgeToMain(){this.sendAgeToMainEvent.emit(this.ageFromForm);}

  // @Output() sendCityToMainEvent = new EventEmitter<string>();
  // sendCityToMain(){this.sendCityToMainEvent.emit(this.cityFromForm);}

  // @Output() sendFacultyToMainEvent = new EventEmitter<string>();
  // sendFacultyToMain(){this.sendFacultyToMainEvent.emit(this.facultyFromForm);}

  // @Output() sendSpecialityToMainEvent = new EventEmitter<string>();
  // sendSpecialityToMain(){this.sendSpecialityToMainEvent.emit(this.specialityFromForm);}
  
  




/* ----------------------------------------RECUPERATION--------------------------------------- */
  lastNameFromFrom!: string;
  firstNameFromForm!: string;
  ageFromForm!: number;
  cityFromForm!: string; 
  facultyFromForm!: string;
  specialityFromForm!: string;
  
  getLastNameFromForm(lastName : string){this.lastNameFromFrom = lastName;}

  getFirstNameFromForm(firstName: string){this.firstNameFromForm = firstName;}

  getAgeFromForm(age : number){this.ageFromForm = age;}

  getCityFromForm(city : string){this.cityFromForm = city;}

  getFacultyFromForm(faculty : string){this.facultyFromForm = faculty;}

  getSpecialityFromForm(speciality : string){this.specialityFromForm = speciality;}





}
