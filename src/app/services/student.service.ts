import { Injectable } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Injectable({providedIn: 'root'})

export class StudentService {

    student: Student[] = [
        {
            id: 1,
            lastName: 'Ducroizet',
            firstName: 'Maxance',
            age: 19,
            city: 'Marseille',
            faculty: 'Informatique',
            speciality: 'Développement'
        }
    ];


    getStudents(): Student[]{
        return this.student;
    }

    //getStudentById

    addStudent(student :Student) {
        this.student.push(student);
    }

    //deleteStudent

    


    

    constructor() { }
    
}