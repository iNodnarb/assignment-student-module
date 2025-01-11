// src/student/student.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'; // TypeORM Repository for database operations
import { Student } from './entities/student.entity'; // Import the Student entity
import { CreateStudentDto } from './dto/create-student.dto'; // The DTO for creating students

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) // Inject the Student repository
    private studentRepository: Repository<Student>, // TypeORM repository for Student entity
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = this.studentRepository.create(createStudentDto); // Create a student entity
    return this.studentRepository.save(student); // Save to the database
  }

  findAll(): Promise<Student[]> {
    return this.studentRepository.find(); // Fetch all students
  }

  async findOne(id: number): Promise<Student> {
    return this.studentRepository.findOne({ where: { id } }); // Fetch one student by ID
  }

  async update(id: number, updateStudentDto: CreateStudentDto): Promise<Student> {
    await this.studentRepository.update(id, updateStudentDto); // Update student data
    return this.studentRepository.findOne({ where: { id } }); // Return updated student
  }

  async remove(id: number): Promise<void> {
    await this.studentRepository.delete(id); // Delete student by ID
  }
}
