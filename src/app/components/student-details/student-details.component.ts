import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { combineLatest, map, Observable } from 'rxjs';
import { Student } from '../../interfaces/student';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent {
  readonly viewModel$: Observable<{ student: Student | undefined }>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly studentsService: StudentsService,
  ) {
    this.viewModel$ = combineLatest([

      this.route.paramMap,
      this.studentsService.students$,

    ]).pipe(

      map(([params, students]: [ParamMap, Student[]]) => {
        const id = Number(params.get('id'));
        if (Number.isNaN(id)) {
          return { student: undefined };
        }
        return { student: students.find((s: Student) => s.id === id) };
      }),

    );
  }
}
