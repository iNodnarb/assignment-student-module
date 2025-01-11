// src/student/entities/student.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;


  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;



  @Column()
  enrollmentDate: string; // Or Date, based on how you want to store it
}
