import { Component, Input, OnChanges} from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.scss']
})
export class DisplayStudentComponent implements OnChanges {

  constructor() { }

/* ------------------- INPUT DONNEES --> body-activity.component.ts -------------------*/
  @Input() lastNameFromMain!: string;
  @Input() firstNameFromMain!: string;
  @Input() ageFromMain!: number;
  @Input() cityFromMain!: string;
  @Input() facultyFromMain!: string;
  @Input() specialityFromMain!: string;

/* ------------------- Création de la liste d'étudiant -------------------*/

students: Student[] = [];

ngOnChanges(): void {
  this.students.push({lastName: this.lastNameFromMain, firstName: this.firstNameFromMain, age: this.ageFromMain, city: this.cityFromMain, faculty: this.facultyFromMain, speciality: this.specialityFromMain})
}

/* ------------------- INFORMATION COMPLEMENTAIRE -------------------*/
infoStudent!: Student;
lastNameInfoStudent!: any;
firstNameInfoStudent!: any;
ageInfoStudent!: any;
cityInfoStudent!: any;
facultyInfoStudent!: any;
specialityInfoStudent!: any;
AIactive!: boolean;

getInfos(studentLastName : any)
{
  let allInfoStudent = Object.values(this.students.filter(filter => filter.lastName === studentLastName));
  this.infoStudent = allInfoStudent[0];


  this.lastNameInfoStudent = this.infoStudent['lastName'];
  this.firstNameInfoStudent = this.infoStudent['firstName'];
  this.ageInfoStudent = this.infoStudent['age'];
  this.cityInfoStudent = this.infoStudent['city'];
  this.facultyInfoStudent = this.infoStudent['faculty'];
  this.specialityInfoStudent = this.infoStudent['speciality'];   
  this.AIactive = true;
}
/* ------------------- SUPPRIMER ETUDIANT -------------------*/
deleteStudent($event : any){this.students = this.students.filter(student => student.lastName !== $event)}

/* -------------------  -------------------*/

getModif(studentLastName : any){
  
}
}
