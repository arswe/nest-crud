import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [UsersModule, ProjectsModule, ServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
