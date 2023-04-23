import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class OrderProductListDto {
  @ApiProperty({ example: 'Coca-Cola' })
  @IsNotEmpty()
  readonly productName: string;

  @ApiProperty({ example: 3 })
  @IsNotEmpty()
  readonly quantity: number;
}
