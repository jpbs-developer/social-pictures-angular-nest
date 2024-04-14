import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from '../typeorm/entities/User';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { SessionsDto } from '../dtos/sessionsDto';
import { JwtService } from '@nestjs/jwt';
type IResponse = {
  user: User;
  token: string;
};

@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async excute({ password, username }: SessionsDto): Promise<IResponse> {
    const user = await this.usersRepository.findOne({
      where: { username },
    });

    if (!user) throw new UnauthorizedException('Invalid email or password!');

    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword)
      throw new UnauthorizedException('Invalid email or password!');

    const payload = { sub: user.id, username: user.username };
    const token = await this.jwtService.signAsync(payload);
    return { user, token };
  }
}
