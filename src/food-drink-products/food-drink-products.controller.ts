import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, BadRequestException, NotFoundException } from '@nestjs/common';
import { FoodDrinkProductsService } from './food-drink-products.service';
import { CreateFoodDrinkProductDto } from './dto/create-food-drink-product.dto';
import { UpdateFoodDrinkProductDto } from './dto/update-food-drink-product.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller()
export class FoodDrinkProductsController {
  constructor(private readonly foodDrinkProductsService: FoodDrinkProductsService) {}

   /*  @UseGuards(JwtAuthGuard)
    @Post('foodDrinkProducts')
    create(@Body() CreateFoodDrinkProductDto: CreateFoodDrinkProductDto) {
      try {
        return this.foodDrinkProductsService.create(CreateFoodDrinkProductDto);
        
      } 
      catch {
        throw new BadRequestException("Érvénytelen adat")
      }
    } */

    @Get('foodDrinkProducts')
    async findAllProducts(){
      return await this.foodDrinkProductsService.findAllProducts() 
    }
      
    @Post('foodDrinkProducts')
    findAll(@Body() CreateFoodDrinkProductDto: CreateFoodDrinkProductDto) {
      return this.foodDrinkProductsService.findAll(CreateFoodDrinkProductDto);
    }
  
    @UseGuards(JwtAuthGuard)
    @Get('foodDrinkProducts/:id')
    async findOne(@Param('id') id: string) {
      try {
        const drink = await this.foodDrinkProductsService.findOne(+id);
        return drink;
      } 
      catch {
        throw new NotFoundException("Nincs ilyen ID-val rendelkező ital");
      }
    }
  
    @UseGuards(JwtAuthGuard)
    @Patch('foodDrinkProducts/:id')
    async update(@Param('id') id: string, @Body() updateDrinkDto: UpdateFoodDrinkProductDto) {
      try {
        const drinkToUpdate = await this.foodDrinkProductsService.update(+id, updateDrinkDto);
        return drinkToUpdate;
      } 
      catch {
        throw new NotFoundException("Nincs ilyen ID-val rendelkező ital, így sikertelen az adatok frissítése")
      }
    }
  
    @UseGuards(JwtAuthGuard)
    @Delete('foodDrinkProducts/:id')
    async remove(@Param('id') id: string) {
      try {
        const drinkToRemove = await this.foodDrinkProductsService.remove(+id);
        return drinkToRemove;
      } 
      catch {
        throw new NotFoundException("Nincs ilyen ID-val rendelkező ital, így sikertelen az adat törlése")
      }
  
    }
}
