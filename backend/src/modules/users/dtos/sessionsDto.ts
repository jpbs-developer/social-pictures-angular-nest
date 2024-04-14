import { OmitType } from '@nestjs/mapped-types';
import { CreateUserDto } from './createUserDto';

export class SessionsDto extends OmitType(CreateUserDto, ['email'] as const) {}
