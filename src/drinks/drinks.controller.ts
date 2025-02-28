import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, NotFoundException, UseGuards } from '@nestjs/common';
import { DrinksService } from './drinks.service';
import { CreateDrinkDto } from './dto/create-drink.dto';
import { UpdateDrinkDto } from './dto/update-drink.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('auth')
export class DrinksController {
  constructor(private readonly drinksService: DrinksService) {}

  @UseGuards(JwtAuthGuard)
  @Post('drinks')
  create(@Body() createDrinkDto: CreateDrinkDto) {
    try {
      return this.drinksService.create(createDrinkDto);
      
    } 
    catch {
      throw new BadRequestException("Érvénytelen adat")
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('drinks')
  findAll() {
    return this.drinksService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('drinks/:id')
  async findOne(@Param('id') id: string) {
    try {
      const drink = await this.drinksService.findOne(+id);
      return drink;
    } 
    catch {
      throw new NotFoundException("Nincs ilyen ID-val rendelkező ital");
    }
  }

  @UseGuards(JwtAuthGuard)
  @Patch('drinks/:id')
  async update(@Param('id') id: string, @Body() updateDrinkDto: UpdateDrinkDto) {
    try {
      const drinkToUpdate = await this.drinksService.update(+id, updateDrinkDto);
      return drinkToUpdate;
    } 
    catch {
      throw new NotFoundException("Nincs ilyen ID-val rendelkező ital, így sikertelen az adatok frissítése")
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete('drinks/:id')
  async remove(@Param('id') id: string) {
    try {
      const drinkToRemove = await this.drinksService.remove(+id);
      return drinkToRemove;
    } 
    catch {
      throw new NotFoundException("Nincs ilyen ID-val rendelkező ital, így sikertelen az adat törlése")
    }

  }
}
