import {  IsNumber, IsOptional, IsString } from "class-validator";

export class CreateFoodDrinkProductDto {

    @IsString()
    @IsOptional()
    productName: string;
  
    @IsString()
    @IsOptional()
    unit: string;
  
    @IsNumber()
    @IsOptional()
    price: number;

    @IsNumber()
    @IsOptional()
    productGroupId: number;
}
