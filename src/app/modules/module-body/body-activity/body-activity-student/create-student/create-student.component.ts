import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})

export class CreateStudentComponent implements OnInit {
speciality: any;

  sendStudentFormToActivity(lastName:string, firstName:string, age:number, city:string, faculty:string, speciality:string){
    
    this.sendStudentFormToContainerEvent.emit({
      lastName: lastName,
      firstName: firstName,
      age: age,
      city: city,
      faculty: faculty,
      speciality: speciality
    })
    }

  @Output() sendStudentFormToContainerEvent = new EventEmitter<Student>();

    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
 

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