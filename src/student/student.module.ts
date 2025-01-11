// src/student/student.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity'; // Import the Student entity
import { StudentService } from './student.service'; // Import the Student service
import { StudentController } from './student.controller'; // Import the Student controller

@Module({
  imports: [TypeOrmModule.forFeature([Student])], // This ensures the StudentRepository is injected properly
  providers: [StudentService], // Declare the service
  controllers: [StudentController], // Declare the controller
})
export class StudentModule {}
