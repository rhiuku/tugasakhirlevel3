import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './entity/siswa.entity';
import { GetFilterStudent } from './dto/get-filter.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/students')
  async createStudent(@Body() studentData: Partial<Student>): Promise<Student> {
    return await this.appService.createStudent(studentData);
  }

  @Get('/students/:id')
  async getStudentById(@Param('id') id: number): Promise<Student>{
    return await this.appService.getStudentById(id);
  }

  @Get('/students')
  async getAllStudents(): Promise<Student[]> {
    return await this.appService.getAllStudents();
  }

  @Put('/students/:id')
  async updateStudent(
    @Param('id') id: number,
    @Body() studentData: Partial<Student>,
  ): Promise<Student>{
    return await this.appService.updateStudent(id, studentData);
  }

  @Delete('/students/:id')
  async deleteStudent(@Param('id') id: number): Promise<void> {
    return await this.appService.deleteStudent(id);
  }

  @Get()
  async findByFilter(@Query() filterParams: any) {
    const students = await this.appService.findFilteredStudents(filterParams);
    return this.appService.findFilteredStudents(filterParams);
  // console.log(filterParams);
  // return this.appService.findByFilter(GetFilterStudent);
  // return await this.appService.findByFilter(filterParams);
  }


}
