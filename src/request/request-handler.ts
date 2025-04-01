import { Level, Type, Action } from './enums';

export abstract class RequestHandler<T> {
  abstract supports(level: Level, type: Type, action: Action): boolean;
  abstract validateAndTransform(data: any): T;
  abstract handle(data: T): Promise<any>;
}
