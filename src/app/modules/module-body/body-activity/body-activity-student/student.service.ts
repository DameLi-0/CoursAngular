import { Injectable } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Injectable({providedIn: 'root'})

export class StudentService {
    
        id: number = 0;
        Students: Student[] = [];
}