import 'reflect-metadata';

const HANDLER_METADATA = Symbol('HANDLER_METADATA');

export function RegisterHandler(): ClassDecorator {
  return (target: object) => {
    Reflect.defineMetadata(HANDLER_METADATA, true, target);
  };
}

export function isHandler(instance: any): boolean {
  return Reflect.getMetadata(HANDLER_METADATA, instance.constructor) === true;
}
