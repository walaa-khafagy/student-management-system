import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  firstName = '';
  lastName = '';
  age: number | null = null;
  department = '';
  email = '';
  phone = '';
  GPA: number | null = null;
  gender: '' | 'Male' | 'Female' = '';
  address = '';
  city = '';
  country = '';
  level: number | null = null;
  enrollmentDate = '';
  isActive = true;

  submitted = false;

  constructor(
    private readonly studentsService: StudentsService,
    private readonly router: Router,
  ) {}

  onSubmit(): void {
    this.submitted = true;
    if (
      !this.firstName.trim() ||
      !this.lastName.trim() ||
      this.age === null ||
      this.age < 1 ||
      !this.department.trim() ||
      !this.email.trim() ||
      !this.phone.trim() ||
      this.GPA === null ||
      this.GPA < 0 ||
      this.GPA > 4
    ) {
      return;
    }

    this.studentsService.addStudent({
      firstName: this.firstName.trim(),
      lastName: this.lastName.trim(),
      age: this.age,
      gender: this.gender || 'Not specified',
      email: this.email.trim(),
      phone: this.phone.trim(),
      address: this.address.trim() || '—',
      city: this.city.trim() || '—',
      country: this.country.trim() || '—',
      department: this.department.trim(),
      level: this.level && this.level > 0 ? this.level : 1,
      GPA: this.GPA,
      enrollmentDate: this.enrollmentDate || new Date().toISOString().slice(0, 10),
      isActive: this.isActive,
    });

    void this.router.navigate(['/students']);
  }
}
