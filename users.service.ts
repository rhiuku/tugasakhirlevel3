import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entity/user.entity";
import { Repository } from "typeorm";
import { Student } from "src/entity/siswa.entity";

@Injectable()

export class UsersService{
    constructor(
        @InjectRepository(Student)
        private readonly userRepository: Repository<Student>,) {}
    async getUserByEmail(email:string): Promise<Student>{
            return await this.userRepository.findOne({
                where: [{email}],
            });
        }
    async createUser(userData: Partial<Student>): Promise<Student>{
        const user = this.userRepository.create(userData);
        return await this.userRepository.save(user);
    }
}

export {Student};