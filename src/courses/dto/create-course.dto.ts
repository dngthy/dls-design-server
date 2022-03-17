import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty({ required: true })
  courseID: string;

  @ApiProperty()
  enrollKey: string;

  @ApiProperty()
  lectutor: string;

  @ApiProperty()
  students: Array<string>;
}
