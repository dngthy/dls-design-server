import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './entities/user.entity';
import { Model } from 'mongoose';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcrypt');

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async create(createUserDto: CreateUserDto) {
    const temp = { ...createUserDto };
    await bcrypt.hash(createUserDto.password, 10, (err, hash) => {
      temp.password = hash;
      const createdUser = new this.userModel(temp);
      return createdUser.save();
    });
  }
  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }
  async findOne(username: string): Promise<User> {
    return await this.userModel.findOne({ username });
  }
  async update(body) {
    const { username } = body;
    return await this.userModel.updateOne({ username }, body);
  }
  async remove(body) {
    await this.userModel.deleteOne(body);
  }
}
