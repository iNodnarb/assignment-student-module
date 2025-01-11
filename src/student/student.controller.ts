// src/student/student.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto'; // The DTO for creating a student

@Controller('students') // This ensures the route is prefixed with /students
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post() // POST route to create a student
  async create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto); // Call the service to handle creation
  }

  @Get() // GET route to fetch all students
  async findAll() {
    return this.studentService.findAll();
  }

  @Get(':id') // GET route to fetch a student by id
  async findOne(@Param('id') id: number) {
    return this.studentService.findOne(id);
  }

  @Put(':id') // PUT route to update a student
  async update(@Param('id') id: number, @Body() updateStudentDto: CreateStudentDto) {
    return this.studentService.update(id, updateStudentDto);
  }

  @Delete(':id') // DELETE route to remove a student by id
  async remove(@Param('id') id: number) {
    return this.studentService.remove(id);
  }
}
