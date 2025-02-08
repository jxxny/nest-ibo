import { ApiProperty } from "@nestjs/swagger";

export class User {
  @ApiProperty({example: 'tester', description: '아이디'})
  id: string;

  @ApiProperty({ example: 'tester', description: '비밀번호' })
  pwd: string;

  @ApiProperty({example: 'token', description: '토큰'})
  token: string;

  @ApiProperty({example: 'test@email.com', description: '이메일'})
  email: string;

  @ApiProperty({example: 'name', description: '이름'})
  name: string;

  @ApiProperty({example: '여', description: '성별'})
  gender: string;

  @ApiProperty({ example: '서버팜 1호기', description: '주소' })
  address: string;

  @ApiProperty({example: '20000102', description: '생년월일'})
  birth: Date;

  @ApiProperty({example: '010-1111-2222', description: '전화번호'})
  telnum: string;

  @ApiProperty({example: '02-1111-2222', description: '보조번호'})
  subnum: string;

  @ApiProperty({example: 'personal', description: '개인번호'})
  personal: string;

  @ApiProperty({example: 'residence', description: '거주지'})
  residence: string;

  @ApiProperty({example: 'join_date', description: '입사일'})
  join_date: Date;

  @ApiProperty({example: 'retire_date', description: '퇴사일'})
  retire_date: Date;

  @ApiProperty({example: 'position', description: '직급'})
  position: string;

  @ApiProperty({example: 'dept', description: '부서'})
  empnum: string;

  @ApiProperty({example: 'job', description: '직책'})
  job: string;

  @ApiProperty({example: 'status', description: '상태'})
  status: string;

  @ApiProperty({example: 'lv1', description: '1단계'})
  lv1: string;

  @ApiProperty({example: 'lv2', description: '2단계'})
  lv2: string;

  @ApiProperty({example : 'lv3', description: '3단계'})
  lv3: string;

  @ApiProperty({example: 'lv4', description: '4단계'})
  lv4: string;

  @ApiProperty({example: 'lv5', description: '5단계'})
  lv5: string;

  create_time: Date;

  update_time: Date;
}