import { Controller, Get, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '@db/database.service';
import { User } from './entity/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly dbService: DatabaseService) {}

  @Get()
  async findAll(): Promise<{
    code: number;
    data?: Array<User>;
    message?: string;
  }> {
    let res: Array<User> = null;
    try {
      res = await this.dbService.query('select * from USER');
      return { code: 200, data: res };
    } catch (error) {
      throw new NotFoundException({ code: error.code, message: error.message });
    }
  }
}
