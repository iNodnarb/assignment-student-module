import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module'; // Import the StudentModule
import { Student } from './student/entities/student.entity'; // Make sure to import the Student entity

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',  // Or your DB type (postgres, sqlite, etc.)
      host: 'localhost', // DB host
      port: 3306, // DB port (MySQL default port)
      username: 'root', // DB username (Change to your MySQL username)
      password: 'BrAd03102002', // DB password (Change to your MySQL password)
      database: 'students_db', // DB name (Ensure this matches the actual database name)
      entities: [Student], // The entity should be included here
      synchronize: true, // In development, set this to `true` to auto-create tables
    }),
    StudentModule, // Import the StudentModule here
  ],
})
export class AppModule {}
