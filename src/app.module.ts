import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { ServiceModule } from './service/service.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [UsersModule, ProjectsModule, ServiceModule, AboutModule, ContactModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
