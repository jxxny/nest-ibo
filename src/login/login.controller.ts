import { BadRequestException, Body, Controller, InternalServerErrorException, NotFoundException, Post } from '@nestjs/common';
import { DatabaseService } from '@db/database.service';
import { User } from '../entity/user.entity';

@Controller('login')
export class LoginController {
  constructor(private readonly dbService: DatabaseService) {
    console.log(dbService);
  }

  @Post()
  async login(@Body() body: { id: string; pwd: string }) {
    try {
      const { id, pwd } = body;
      console.log('로그인 시도 =====> ', id, pwd);

      // 사용자 입력값 검증 시작
      if (!id || !pwd) {
        throw new BadRequestException({ code: 400, message: 'ID와 비밀번호가 필요합니다.' });
      }

      const res: Array<User> = await this.dbService.query(`SELECT * FROM USER WHERE id = ?`, [id]);

      // 사용자 정보를 찾을 수 없을 때
      if (res.length === 0) {
        throw new NotFoundException({ code: 404, message: '해당 ID의 유저를 찾을 수 없습니다.' });
      }

      const user: User = res[0];
      console.log('결과 조회 =====> ', user);

      // 비밀번호 검증 시작
      if (user.pwd !== pwd) {
        throw new BadRequestException({ code: 400, message: '비밀번호가 일치하지 않습니다.' });
      }

      // 로그인 성공
      return { code: 200, data: res, message: '로그인 성공' };
    } catch (error) {
      console.log('로그인 오류 발생!! =====> ', error);
      throw new InternalServerErrorException({ code: error.code || 500, message: error.message });
    }
  }
}
