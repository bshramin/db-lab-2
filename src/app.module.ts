import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './User/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserEntity from './db/entity/user.entity';
import BooksModule from './Books/books.module';
import GenreModule from './Genre/genre.module';
import BookEntity from './db/entity/book.entity';
import GenreEntity from './db/entity/genre.entity';
import { HelloModule } from './hello/hello.module';
import JobseekersModule from './jobseekers/jobseekers.module';

@Module({
  imports: [
    UserModule ,
    BooksModule,
    GenreModule,
    HelloModule,
    JobseekersModule,
    TypeOrmModule.forFeature(
      [UserEntity, BookEntity , GenreEntity],
    ),
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
