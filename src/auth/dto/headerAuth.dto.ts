import { ApiHeader, ApiHeaders, PartialType } from '@nestjs/swagger';
import { CreateAuthDto } from './create-auth.dto';

export class HeaderAuth extends PartialType(CreateAuthDto) {}
