import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { AppService } from 'src/app.service';
import { AppModule } from 'src/app.module';
import { AuthService } from 'src/auth/auth.service';

@Module({
    providers: [UsersService],
    exports: [UsersService],
    
    
})

export class UsersModule {}
