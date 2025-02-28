import { PartialType } from '@nestjs/swagger';
import { CreateDrinkDto } from './create-drink.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateDrinkDto extends PartialType(CreateDrinkDto) {
  @IsString()
  @IsOptional()
  drinkName?: string;

  @IsString()
  @IsOptional()
  unit?: string;

  @IsNumber()
  @IsOptional()
  price?: number;
}
