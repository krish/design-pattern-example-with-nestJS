import { Injectable, BadRequestException } from '@nestjs/common';
import { RequestHandler } from '../request-handler';
import { Level, Type, Action } from '../enums';
import { L1T1A1Dto } from '../dto/l1-t1-a1.dto';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { RegisterHandler } from '../decorators/register-handler.decorator';

@RegisterHandler()
@Injectable()
export class L1T1A1Handler extends RequestHandler<L1T1A1Dto> {
  supports(level: Level, type: Type, action: Action): boolean {
    return level === Level.L1 && type === Type.T1 && action === Action.A1;
  }

  validateAndTransform(data: any): L1T1A1Dto {
    const dto = plainToInstance(L1T1A1Dto, data);
    const errors = validateSync(dto);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    return dto;
  }

  async handle(data: L1T1A1Dto): Promise<any> {
    //business logic
    return {
      message: `Processed ${data.customerId} with quantity ${data.quantity}`,
    };
  }
}
