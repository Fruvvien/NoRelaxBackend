import { PartialType } from '@nestjs/swagger';
import { CreateFoodDrinkProductDto } from './create-food-drink-product.dto';

export class UpdateFoodDrinkProductDto extends PartialType(CreateFoodDrinkProductDto) {}
