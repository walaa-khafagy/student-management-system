import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../../interfaces/student';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  readonly students$: Observable<Student[]> = this.studentsService.students$;

  constructor(
    private readonly studentsService: StudentsService,
    private readonly router: Router,
  ) {}
}
