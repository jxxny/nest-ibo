import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DatabaseModule } from '@db/database.module';
import { JwtStrategy } from 'src/utils/jwt-strategy';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],

})
export class AuthModule {}
