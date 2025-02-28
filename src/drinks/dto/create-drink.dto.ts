import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDrinkDto {
  @IsString()
  @IsNotEmpty()
  drinkName: string;

  @IsString()
  @IsNotEmpty()
  unit: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
