import { IsString, IsInt } from 'class-validator';

export class L1T1A1Dto {
  @IsString()
  customerId: string;

  @IsInt()
  quantity: number;
}
