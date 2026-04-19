import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../interfaces/student';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css'],
})
export class StudentTableComponent {

  @Input() students: Student[] = [];

  trackById(_index: number, student: Student): number {
    return student.id;
  }

  displayName(student: Student): string {
    return `${student.firstName} ${student.lastName}`.trim();
  }
}
