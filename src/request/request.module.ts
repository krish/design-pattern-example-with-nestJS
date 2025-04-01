import { Module } from '@nestjs/common';
import { RequestController } from './request.controller';
import { RequestDispatcher } from './dispatcher/request-dispatcher.service';
import { RequestHandlerRegistry } from './registry/request-handler.registry';
import { L1T1A1Handler } from './handlers/l1-t1-a1.handler';
import { L2T1A3Handler } from './handlers/l2-t1-a3.handler';

@Module({
  controllers: [RequestController],
  providers: [
    RequestDispatcher,
    RequestHandlerRegistry,
    L1T1A1Handler,
    L2T1A3Handler,
  ],
})
export class RequestModule {}
