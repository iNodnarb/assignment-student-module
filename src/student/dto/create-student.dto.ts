// src/student/dto/create-student.dto.ts
export class CreateStudentDto {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly enrollmentDate: string; // Or Date if you want to use Date type
}
