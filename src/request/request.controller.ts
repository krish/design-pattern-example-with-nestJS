import { Controller, Post, Body } from '@nestjs/common';
import { RequestDispatcher } from './dispatcher/request-dispatcher.service';
import { Request } from './request.interface';

@Controller('requests')
export class RequestController {
  constructor(private readonly dispatcher: RequestDispatcher) {}

  @Post()
  async handle(@Body() request: Request): Promise<any> {
    return this.dispatcher.dispatch(request);
  }
}
