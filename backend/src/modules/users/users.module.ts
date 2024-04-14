import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './typeorm/entities/User';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { SessionsController } from './controllers/sessions.controller';
import { SessionsService } from './services/sessions.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [UsersController, SessionsController],
  providers: [UsersService, SessionsService],
  exports: [TypeOrmModule],
})
export class UsersModule {}
