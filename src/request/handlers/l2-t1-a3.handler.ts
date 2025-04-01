import { Injectable, BadRequestException } from '@nestjs/common';
import { RequestHandler } from '../request-handler';
import { Level, Type, Action } from '../enums';
import { L2T1A3Dto } from '../dto/l2-t1-a3.dto';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { RegisterHandler } from '../decorators/register-handler.decorator';

@RegisterHandler()
@Injectable()
export class L2T1A3Handler extends RequestHandler<L2T1A3Dto> {
  supports(level: Level, type: Type, action: Action): boolean {
    return level === Level.L2 && type === Type.T1 && action === Action.A3;
  }

  validateAndTransform(data: any): L2T1A3Dto {
    const dto = plainToInstance(L2T1A3Dto, data);
    const errors = validateSync(dto);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    return dto;
  }

  async handle(data: L2T1A3Dto): Promise<any> {
    return {
      message: `Processed order ${data.orderId} (urgent: ${data.isUrgent})`,
    };
  }
}
