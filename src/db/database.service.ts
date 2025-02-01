import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import * as mysql from 'mysql2/promise';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private pool: mysql.Pool;

  constructor() {
    this.pool = mysql.createPool({
      host: '210.114.19.32',
      port: 34541,
      user: 'babble',
      password: 'P@ssQhdks00@@',
      database: 'IBO',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }

  async onModuleInit() {
    console.log('Database connected');
  }

  async onModuleDestroy() {
    await this.pool.end();
  }

  async query<T>(sql: string, params?: any[]): Promise<T[]> {
    const [rows] = await this.pool.execute<any>(sql, params);
    return rows;
  }
}
