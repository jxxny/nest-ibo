import { DatabaseModule } from '@db/database.module';
import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
    imports: [DatabaseModule],
    controllers: [LoginController],
    providers: [LoginService],
})
export class LoginModule {}
