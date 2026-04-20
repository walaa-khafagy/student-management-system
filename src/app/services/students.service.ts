import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from '../interfaces/student';

const INITIAL_STUDENTS: Student[] = [
  {
    id: 1,
    firstName: 'Ali',
    lastName: 'Hassan',
    age: 21,
    gender: 'Male',
    email: 'ali.hassan@email.com',
    phone: '01000000000',
    address: '12 Main Street',
    city: 'Cairo',
    country: 'Egypt',
    department: 'Computer Science',
    level: 3,
    GPA: 3.2,
    enrollmentDate: '2023-09-01',
    isActive: true,
  },
  {
    id: 2,
    firstName: 'Sara',
    lastName: 'Mohamed',
    age: 20,
    gender: 'Female',
    email: 'sara.m@email.com',
    phone: '01011112222',
    address: '5 Nile Corniche',
    city: 'Cairo',
    country: 'Egypt',
    department: 'Information Systems',
    level: 2,
    GPA: 3.6,
    enrollmentDate: '2023-09-01',
    isActive: true,
  },
];

@Injectable({
  providedIn: 'root',
})

export class StudentsService {
  private readonly studentsSubject = new BehaviorSubject<Student[]>(INITIAL_STUDENTS);

  readonly students$: Observable<Student[]> = this.studentsSubject.asObservable();

  getStudents(): Student[] {
    return this.studentsSubject.getValue();
  }

  deleteStudent(id: number): void {
    this.studentsSubject.next(this.getStudents().filter((s) => s.id !== id));
  }

  private nextId = Math.max(0, ...INITIAL_STUDENTS.map((s) => s.id)) + 1;

  addStudent(student: Omit<Student, 'id'>): void {
    const students = [...this.getStudents(), { ...student, id: this.nextId++ }];
    this.studentsSubject.next(students);
  }
}
