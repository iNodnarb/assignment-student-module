import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: Repository<Student>);
    create(createStudentDto: CreateStudentDto): Promise<Student>;
    findAll(): Promise<Student[]>;
    findOne(id: number): Promise<Student>;
    update(id: number, updateStudentDto: CreateStudentDto): Promise<Student>;
    remove(id: number): Promise<void>;
}
