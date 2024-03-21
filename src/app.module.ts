import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { ServiceModule } from './service/service.module';
import { AboutModule } from './modules/about/about.module';
import { ContactModule } from './modules/contact/contact.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [
    UsersModule,
    ProjectsModule,
    ServiceModule,
    AboutModule,
    ContactModule,
    ContactsModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
