import { PartialType } from '@nestjs/swagger';
import { CreateFoodDto } from './create-food.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateFoodDto extends PartialType(CreateFoodDto) {
  @IsString()
  @IsOptional()
  foodName?: string;

  @IsString()
  @IsOptional()
  unit?: string;

  @IsNumber()
  @IsOptional()
  price?: number;
}
