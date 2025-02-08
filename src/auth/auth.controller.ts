import { BadRequestException, Body, Controller, Get, InternalServerErrorException, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { DatabaseService } from '@db/database.service';
import { User } from '../entity/user.entity';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

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

  @Post()
  @ApiOperation({ summary: '새 사용자 추가' })
  @ApiResponse({ status: 201, description: '사용자가 성공적으로 추가되었습니다.' })
  @ApiBody({ type: User })
  async insertUser(@Body() body: User) {
    try {
      const { id, name, email } = body;
      // ID 중복 체크
      const existingUser = await this.dbService.query(`SELECT * FROM USER WHERE id = ?`, [id]);
      if (existingUser.length > 0) {
        throw new BadRequestException({ code: 400, message: '이미 존재하는 ID입니다.' });
      }

      // 사용자 추가
      await this.dbService.query(`INSERT INTO USER (id, name, email) VALUES (?, ?, ?)`, [id, name, email]);

      return { code: 201, message: '사용자가 성공적으로 추가되었습니다.' };
    } catch (error) {
      throw new InternalServerErrorException({ code: error.code || 500, message: error.message });
    }
  }
}
