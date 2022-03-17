import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { CreateAuthDto } from './auth/dto/create-auth.dto';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}
  //nếu không có thì chỉ trả về access_token
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
