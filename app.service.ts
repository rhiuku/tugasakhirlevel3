import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entity/siswa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async createStudent(studentData: Partial<Student>): Promise<Student>{
    const student = this.studentRepository.create(studentData);
    return await this.studentRepository.save(student);
  }

  async getStudentById(id: number): Promise<Student>{
    return await this.studentRepository.findOne({
      where: [{ id }],
    })
  }

  async updateStudent(id:number, studentData: Partial<Student>): Promise<Student>{
    await this.studentRepository.update(id, studentData);
    return this.getStudentById(id);
  }

  async deleteStudent(id: number): Promise<void> {
    await this.studentRepository.delete(id);
  }

  async getAllStudents(): Promise<Student[]>{
    return await this.studentRepository.find();
  }

  async findFilteredStudents(filterParams: any): Promise<Student[]>{
    return await this.studentRepository.find({where : {name: filterParams.name}});
  }

  async getUserByEmail(email:string): Promise<Student>{
    return await this.studentRepository.findOne({
        where: [{email}],
    });
  }
  async createUser(userData: Partial<Student>): Promise<Student>{
    const user = this.studentRepository.create(userData);
    return await this.studentRepository.save(user);
  }

}
