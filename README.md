# Student Management System

A responsive Angular 16 web application for managing student records.  
It allows users to view, add, delete, and inspect student details using a clean Bootstrap UI.

## Live Demo
[Click here to view the app](https://walaa-khafagy.github.io/student-management-system/)

## Project Overview

This project was built as a practice assignment to demonstrate core Angular concepts:

- Component-based architecture
- Routing between multiple pages
- Shared state using a service
- Reactive data flow with `BehaviorSubject` and `Observable`
- Parent/child communication with `@Input` and `@Output`
- Angular template features like interpolation, bindings, and structural directives

## Features

- Home page with quick navigation
- Students page with a responsive table
- Add Student form with validation
- Student Details page using route parameter (`/student/:id`)
- Delete student action from the table
- Auto-updating UI through `AsyncPipe`
- Bootstrap-based styling and layout

## Student Data Fields

Each student record supports:

- `id`
- `firstName`
- `lastName`
- `age`
- `gender`
- `email`
- `phone`
- `address`
- `city`
- `country`
- `department`
- `level`
- `GPA`
- `enrollmentDate`
- `isActive`

## Project Structure

```text
src/app/
  components/
    add-student/
    home/
    navbar/
    student-details/
    student-table/
    students/
  interfaces/
    student.ts
  services/
    students.service.ts
```

## Screens / Routes

- `/home` - Welcome page
- `/students` - Student list and actions
- `/add-student` - Add new student form
- `/student/:id` - Student profile/details

## Author

- Walaa Khafagy 
- email: walaa.a.khafagy@gmail.com
