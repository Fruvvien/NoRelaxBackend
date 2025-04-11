import { IsNumber, IsOptional, IsString } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class CreateFoodDrinkProductDto {
  /**
   * The name of the product
   */
  @ApiPropertyOptional({
    description: 'The name of the food or drink product',
    example: 'Borsodi csapolt',
  })
  @IsString()
  @IsOptional()
  productName: string;

  /**
   * The unit of the product
   */
  @ApiPropertyOptional({
    description: 'The unit of the product (e.g., 5 dl, 1 bottle)',
    example: '5 dl',
  })
  @IsString()
  @IsOptional()
  unit: string;

  /**
   * The price of the product
   */
  @ApiPropertyOptional({
    description: 'The price of the product in HUF',
    example: 500,
  })
  @IsNumber()
  @IsOptional()
  price: number;

  /**
   * The ID of the product group
   */
  @ApiPropertyOptional({
    description: 'The ID of the product group the product belongs to',
    example: 1,
  })
  @IsNumber()
  @IsOptional()
  productGroupId: number;
}
