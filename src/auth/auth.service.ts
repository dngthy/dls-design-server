import { Dependencies, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import bcrypt = require('bcrypt');
@Dependencies(UsersService, JwtService)
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user == null) return null;
    const result = await bcrypt.compare(pass, user.password);
    const { password, ...info } = user;
    return result ? info : null;
  }
  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
      ...user._doc,
    };
  }
}
