import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/createUserDto';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get()
  index() {
    return this.service.index();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.service.create(createUserDto);
  }
}
