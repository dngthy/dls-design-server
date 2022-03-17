import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SchemaFactory } from '@nestjs/mongoose';
export type AuthDocument = Auth & Document;
@Schema()
export class Auth {
  @Prop({ required: true })
  username: string;
  @Prop({ required: true })
  password: string;
}
export const AuthSchema = SchemaFactory.createForClass(Auth);
