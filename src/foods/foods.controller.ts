import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, BadRequestException, NotFoundException } from '@nestjs/common';
import { FoodsService } from './foods.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('auth')
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('foods')
  create(@Body() createFoodDto: CreateFoodDto) {
    try {
      return this.foodsService.create(createFoodDto);  
    } 
    catch {
      throw new BadRequestException("Érvénytelen adat");
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('foods')
  findAll() {
    return this.foodsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('foods/:id')
  async findOne(@Param('id') id: string) {
    try {
      const food = await this.foodsService.findOne(+id);
      return food;
    } 
    catch {
      throw new NotFoundException("Nincs ilyen ID-val rendelkező étel");
    }
  }

  @UseGuards(JwtAuthGuard)
  @Patch('foods/:id')
  async update(@Param('id') id: string, @Body() updateFoodDto: UpdateFoodDto) {
    try {
      const foodToUpdate = await this.foodsService.update(+id, updateFoodDto);
      return foodToUpdate;
    } 
    catch {
      throw new NotFoundException("Nincs ilyen ID-val rendelkező étel, így sikertelen az adatok frissítése");
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete('foods/:id')
  async remove(@Param('id') id: string) {
    try {
      const foodToRemove = await this.foodsService.remove(+id);
      return foodToRemove;
    } 
    catch {
      throw new NotFoundException("Nincs ilyen ID-val rendelkező étel, így sikertelen az adat törlése")
    }
  }
}
