import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type SemesterDocument = Semester & Document;
@Schema()
export class Semester {
  @Prop({ required: true })
  semesterID: string;

  @Prop({ required: true })
  semesterName: string;

  @Prop()
  blockCourses: Array<{
    blockCoursesID: string;
    courses: Array<string>;
  }>;
}
export const SemesterSchema = SchemaFactory.createForClass(Semester);
