import { Level, Type, Action } from './enums';

export interface Request {
  level: Level;
  type: Type;
  action: Action;
  data: any;
}
