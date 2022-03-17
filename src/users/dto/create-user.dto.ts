import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  isOnline: boolean;

  @ApiProperty()
  name: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  courses: Array<{
    courseID: string;
    grades: Array<{
      testID: string;
      grade: number;
    }>;
  }>;
}
