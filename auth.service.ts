import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService, Student } from "src/users/users.service";



@Injectable()
export class AuthService{
    constructor(private usersService: UsersService){}

    async signIn(email: string, pass: string): Promise<any>{
        const user = await this.usersService.getUserByEmail(email);
        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }
        const {password, ...result} = user;

        return result;
    }
    async registerUser(newUser: Partial<Student>): Promise<Student>{
        const user = this.usersService.createUser(newUser);
        return user;
    }
}
