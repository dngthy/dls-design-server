import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { SemestersModule } from './semesters/semesters.module';
import { AuthModule } from './auth/auth.module';
const MONGODB_USERNAME = 'dngthy';
const MONGODB_PASSWORD = 'd1u1n0g8t2h0y02';
const MONGODB_URL =
  'mongodb+srv://' +
  MONGODB_USERNAME +
  ':' +
  MONGODB_PASSWORD +
  '@lms.ebhxa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
@Module({
  imports: [
    MongooseModule.forRoot(MONGODB_URL),
    UsersModule,
    CoursesModule,
    SemestersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
