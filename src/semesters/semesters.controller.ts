import { Controller, Get, Post, Body, Delete, Put } from '@nestjs/common';
import { SemestersService } from './semesters.service';
import { CreateSemesterDto } from './dto/create-semester.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Semesters')
@Controller('semesters')
export class SemestersController {
  constructor(private readonly semestersService: SemestersService) {}

  @Post('/createNewSemester')
  create(@Body() createSemesterDto: CreateSemesterDto) {
    return this.semestersService.create(createSemesterDto);
  }

  @Get('/getListUsers')
  findAll() {
    return this.semestersService.findAll();
  }

  @Get('/findSemester')
  findOne(@Body() body: CreateSemesterDto) {
    return this.semestersService.findOne(body);
  }

  @Put('/updateSemester')
  update(@Body() body: CreateSemesterDto) {
    return this.semestersService.update(body);
  }

  @Delete('/deleteSemester')
  remove(@Body() body: CreateSemesterDto) {
    return this.semestersService.remove(body);
  }
}
