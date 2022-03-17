import { Module } from '@nestjs/common';
import { SemestersService } from './semesters.service';
import { SemestersController } from './semesters.controller';
import { Semester, SemesterSchema } from './entities/semester.entity';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Semester.name,
        schema: SemesterSchema,
      },
    ]),
  ],
  controllers: [SemestersController],
  providers: [SemestersService],
})
export class SemestersModule {}
