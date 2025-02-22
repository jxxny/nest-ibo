import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {
    constructor(private readonly jwtService: JwtService) {}

    generateToken(payload: { userId: string; username: string, expTime: number }) {
      return this.jwtService.sign(payload, { expiresIn: `${payload.expTime}hour` });
    }

}
