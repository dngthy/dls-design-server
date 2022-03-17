import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CourseDocument = Course & Document;

@Schema()
export class Course {
  @Prop()
  courseID: string;

  @Prop()
  enrollKey: string;

  @Prop()
  lectutor: string;

  @Prop()
  students: Array<string>;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
