import { Module } from '@nestjs/common';
import { FoodDrinkProductsService } from './food-drink-products.service';
import { FoodDrinkProductsController } from './food-drink-products.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FoodDrinkProductsController],
  providers: [FoodDrinkProductsService,PrismaService],
})
export class FoodDrinkProductsModule {}
