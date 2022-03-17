import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateSemesterDto } from './dto/create-semester.dto';
import { UpdateSemesterDto } from './dto/update-semester.dto';
import { SemesterDocument, Semester } from './entities/semester.entity';
import { Model } from 'mongoose';
@Injectable()
export class SemestersService {
  constructor(
    @InjectModel(Semester.name) private semesterModel: Model<SemesterDocument>,
  ) {}
  async create(createSemesterDto: CreateSemesterDto) {
    const createdSemester = new this.semesterModel(createSemesterDto);
    return createdSemester.save();
  }

  async findAll(): Promise<Semester[]> {
    return await this.semesterModel.find();
  }

  async findOne(body): Promise<Semester> {
    console.log(body);
    return await this.semesterModel.findOne(body);
  }

  async update(body) {
    const { semesterID } = body;
    return await this.semesterModel.update({ semesterID }, body);
  }

  async remove(body) {
    return await this.semesterModel.remove(body);
  }
}
