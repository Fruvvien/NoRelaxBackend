import { PartialType, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateOrderDto } from './create-order.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  /**
   * The status of the order
   */
  @ApiPropertyOptional({
    description: 'The status of the order',
    example: 'completed',
  })
  @IsString()
  @IsOptional()
  status: string;
}
