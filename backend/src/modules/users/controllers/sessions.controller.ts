import { Body, Controller, Post } from '@nestjs/common';
import { SessionsDto } from '../dtos/sessionsDto';
import { SessionsService } from '../services/sessions.service';

@Controller('sessions')
export class SessionsController {
  constructor(private service: SessionsService) {}

  @Post()
  execute(@Body() sessionsDto: SessionsDto) {
    return this.service.excute(sessionsDto);
  }
}
