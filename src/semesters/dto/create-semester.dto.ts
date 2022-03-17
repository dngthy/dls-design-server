import { ApiProperty } from '@nestjs/swagger';

export class CreateSemesterDto {
  @ApiProperty({ required: true })
  semesterID: string;

  @ApiProperty({ required: true })
  semesterName: string;

  @ApiProperty()
  blockCourses: Array<{
    blockCoursesID: string;
    courses: Array<string>;
  }>;
}
