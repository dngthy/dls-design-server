import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course, CourseDocument } from './entities/course.entity';
import { Model } from 'mongoose';
@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(Course.name) private courseModel: Model<CourseDocument>,
  ) {}
  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const createdCourse = new this.courseModel(createCourseDto);
    return createdCourse.save();
  }
  async findAll(): Promise<Course[]> {
    return await this.courseModel.find();
  }
  async findOne(body): Promise<Course> {
    return await this.courseModel.findOne(body);
  }
  async update(body) {
    const { courseID } = body;
    return await this.courseModel.updateOne({ courseID }, body);
  }
  async remove(body) {
    return await this.courseModel.deleteOne(body);
  }
}
