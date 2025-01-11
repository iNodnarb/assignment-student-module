import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    create(createStudentDto: CreateStudentDto): Promise<import("./entities/student.entity").Student>;
    findAll(): Promise<import("./entities/student.entity").Student[]>;
    findOne(id: number): Promise<import("./entities/student.entity").Student>;
    update(id: number, updateStudentDto: CreateStudentDto): Promise<import("./entities/student.entity").Student>;
    remove(id: number): Promise<void>;
}
