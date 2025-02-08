import { BadRequestException, Controller, Get, InternalServerErrorException, NotFoundException, Param, Query } from '@nestjs/common';
import { DatabaseService } from '@db/database.service';
import { User } from './entity/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly dbService: DatabaseService) {}

  @Get()
  async findId(@Query('id') id: string) {
    try {
      console.log('파라미터 값 넘어왔는지 확인 =====> ', id);

      if (!id) {
        throw new BadRequestException({ code: 400, message: 'ID가 필요합니다.' });
      }

      const res = await this.dbService.query(`SELECT * FROM USER WHERE id = ?`, [id]);

      if (res.length === 0) {
        throw new NotFoundException({ code: 404, message: '해당 ID의 유저를 찾을 수 없습니다.' });
      }

      return { code: 200, data: res };
    } catch (error) {
      throw new InternalServerErrorException({ code: error.code || 500, message: error.message });
    }
  }
}
