import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from 'src/roles/role.enum';
export type UserDocument = User & Document;
@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  isOnline: boolean;

  @Prop({ required: true })
  name: string;

  @Prop()
  image: string;

  @Prop()
  courses: Array<{
    courseID: string;
    grades: Array<{
      testID: string;
      grade: number;
    }>;
  }>;
  @Prop({ type: 'string', enum: Role, default: Role.User })
  public role: Role;
}
export const UserSchema = SchemaFactory.createForClass(User);
