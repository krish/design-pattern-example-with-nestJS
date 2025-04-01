import { Injectable } from '@nestjs/common';
import { Request } from '../request.interface';
import { RequestHandlerRegistry } from '../registry/request-handler.registry';

@Injectable()
export class RequestDispatcher {
  constructor(private readonly registry: RequestHandlerRegistry) {}

  async dispatch(req: Request): Promise<any> {
    const handler = this.registry.find(req.level, req.type, req.action);
    const dto = handler.validateAndTransform(req.data);
    return handler.handle(dto);
  }
}
