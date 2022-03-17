import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Put,
  Param,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBearerAuth, ApiHeader, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/roles/role.decorator';
import { Role } from 'src/roles/role.enum';
import { RolesGuard } from 'src/roles/roles.guard';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('/signUpUser')
  register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @Roles(Role.User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Get('/getListUsers')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('findUser/:username')
  findOne(@Param('username', ParseIntPipe) username: string) {
    return this.usersService.findOne(username);
  }
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Put('/updateUser')
  update(@Body() body: CreateUserDto) {
    return this.usersService.update(body);
  }

  @Delete('/deleteUser')
  remove(@Body() body: CreateUserDto) {
    return this.usersService.remove(body);
  }
}
