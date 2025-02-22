import { ApiProperty } from "@nestjs/swagger";

export class User {
  @ApiProperty({example: 'tester', description: '아이디'})
  ID: string;

  @ApiProperty({ example: 'tester', description: '비밀번호' })
  PWD: string;

  @ApiProperty({example: 'token', description: '토큰'})
  TOKEN: string;

  @ApiProperty({example: 'test@email.com', description: '이메일'})
  EMAIL: string;

  @ApiProperty({example: 'name', description: '이름'})
  NAME: string;

  @ApiProperty({example: '여', description: '성별'})
  GENDER: string;

  @ApiProperty({ example: '서버팜 1호기', description: '주소' })
  ADDRESS: string;

  @ApiProperty({example: '20000102', description: '생년월일'})
  BIRTH: Date;

  @ApiProperty({example: '010-1111-2222', description: '전화번호'})
  TELNUM: string;

  @ApiProperty({example: '02-1111-2222', description: '보조번호'})
  SUBNUM: string;

  @ApiProperty({example: 'personal', description: '개인번호'})
  PERSONAL: string;

  @ApiProperty({example: 'residence', description: '거주지'})
  RESIDENCE: string;

  @ApiProperty({example: 'join_date', description: '입사일'})
  JOIN_DATE: Date;

  @ApiProperty({example: 'retire_date', description: '퇴사일'})
  RETIRE_DATE: Date;

  @ApiProperty({example: 'position', description: '직급'})
  POSITION: string;

  @ApiProperty({example: 'dept', description: '부서'})
  EMPNUM: string;

  @ApiProperty({example: 'job', description: '직책'})
  JOB: string;

  @ApiProperty({example: 'status', description: '상태'})
  STATUS: string;

  @ApiProperty({example: 'lv1', description: '1단계'})
  LV1: string;

  @ApiProperty({example: 'lv2', description: '2단계'})
  LV2: string;

  @ApiProperty({example : 'lv3', description: '3단계'})
  LV3: string;

  @ApiProperty({example: 'lv4', description: '4단계'})
  LV4: string;

  @ApiProperty({example: 'lv5', description: '5단계'})
  LV5: string;

  CREATE_TIME: Date;

  UPDATE_TIME: Date;
}

export class LoginDto {
  @ApiProperty({ example: '2', description: '사용자 ID' })
  id: string;

  @ApiProperty({ example: 'IB@ccount12#$', description: '비밀번호' })
  pwd: string;
}