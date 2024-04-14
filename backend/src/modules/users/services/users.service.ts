import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/createUserDto';
import { InjectRepository } from '@nestjs/typeorm';
import User from '../typeorm/entities/User';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async index(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async create({ email, password, username }: CreateUserDto): Promise<User> {
    const usernameIsExists = await this.usersRepository.findOne({
      where: { username },
    });

    if (usernameIsExists)
      throw new ConflictException('Username already exists');
    const emailIsExists = await this.usersRepository.findOne({
      where: { email },
    });
    if (emailIsExists) throw new NotFoundException('Email already exists');

    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);

    const user = this.usersRepository.create({
      email,
      password: hashedPassword,
      username,
    });

    return this.usersRepository.save(user);
  }
}
