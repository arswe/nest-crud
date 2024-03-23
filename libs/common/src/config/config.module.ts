import { Module } from '@nestjs/common';
import {
  ConfigService,
  ConfigModule as NestCinfigModule,
} from '@nestjs/config';

@Module({
  imports: [NestCinfigModule.forRoot()],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
