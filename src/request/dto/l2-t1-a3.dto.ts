import { IsUUID, IsBoolean } from 'class-validator';

export class L2T1A3Dto {
  @IsUUID()
  orderId: string;

  @IsBoolean()
  isUrgent: boolean;
}
