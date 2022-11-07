import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-activity',
  templateUrl: './body-activity.component.html',
  styleUrls: ['./body-activity.component.scss']
})
export class BodyActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

/* ------------------- Recuperation des données du formulaire -------------------*/
 lastNameFromFrom!: string;
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

  receiveSpecialityFromForm($event : any){this.specialityFromForm = $event;}
}
