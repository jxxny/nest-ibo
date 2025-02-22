import { DatabaseModule } from '@db/database.module';
import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [DatabaseModule, JwtModule.register({
        secret: process.env.JWT_SECRET || 'my-secret-key',
        signOptions: { expiresIn: '1h' }, // 토큰 유효 시간
      }),],
    controllers: [LoginController],
    providers: [LoginService],
})
export class LoginModule {}
