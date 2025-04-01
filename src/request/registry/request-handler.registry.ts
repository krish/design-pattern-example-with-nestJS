import {
  Injectable,
  OnModuleInit,
  NotFoundException,
  Inject,
} from '@nestjs/common';
import { ModulesContainer, ModuleRef } from '@nestjs/core';
import { RequestHandler } from '../request-handler';
import { Level, Type, Action } from '../enums';
import { isHandler } from '../decorators/register-handler.decorator';

@Injectable()
export class RequestHandlerRegistry implements OnModuleInit {
  private handlers: RequestHandler<any>[] = [];

  constructor(
    private readonly moduleRef: ModuleRef,
    @Inject(ModulesContainer)
    private readonly modulesContainer: ModulesContainer,
  ) {}

  onModuleInit() {
    const providers = Array.from(this.modulesContainer.values())
      .flatMap((module) => Array.from(module.providers.values()))
      .map((wrapper) => wrapper.instance)
      .filter((instance) => instance && isHandler(instance));

    this.handlers = providers as RequestHandler<any>[];
  }

  find(level: Level, type: Type, action: Action): RequestHandler<any> {
    const handler = this.handlers.find((h) => h.supports(level, type, action));
    if (!handler) {
      throw new NotFoundException(
        `No handler found for ${level}/${type}/${action}`,
      );
    }
    return handler;
  }
}
