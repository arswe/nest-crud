import { Module } from '@nestjs/common';
import { ConfigModule as NestCinfigModule } from '@nestjs/config';

@Module({
  imports: [NestCinfigModule.forRoot()],
  providers: [],
  exports: [],
})
export class ConfigModule {}
