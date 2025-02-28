import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateFoodDto {
  @IsString()
  @IsNotEmpty()
  foodName: string;

  @IsString()
  @IsNotEmpty()
  unit: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
