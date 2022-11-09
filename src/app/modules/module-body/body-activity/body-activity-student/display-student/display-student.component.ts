import { Component, OnInit} from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.scss']
})
export class DisplayStudentComponent implements OnInit {
  Students: Student[] | undefined;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.Students = this.studentService.getStudents();
  }
}