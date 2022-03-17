import { Controller, Get, Post, Body, Delete, Put } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Courses')
@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post('/createNewCourse')
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get('/getListCourses')
  findAll() {
    return this.coursesService.findAll();
  }

  @Post('/findCourse')
  findOne(@Body() body: CreateCourseDto) {
    return this.coursesService.findOne(body);
  }

  @Put('/updateCourse')
  update(@Body() body: CreateCourseDto) {
    return this.coursesService.update(body);
  }

  @Delete('/deleteCourse')
  remove(@Body() body: CreateCourseDto) {
    return this.coursesService.remove(body);
  }
}
