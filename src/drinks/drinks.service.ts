import { Injectable } from '@nestjs/common';
import { CreateDrinkDto } from './dto/create-drink.dto';
import { UpdateDrinkDto } from './dto/update-drink.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DrinksService {
  constructor ( private db: PrismaService){};

  create(createDrinkDto: CreateDrinkDto) {
    return this.db.drinks.create({
      data: {
        ...createDrinkDto,
      }
    })
  }

  findAll() {
    return this.db.drinks.findMany();
  }

  findOne(id: number) {
    return this.db.drinks.findUnique({
      where: {
        id: id
      }
    });
  }

  update(id: number, updateDrinkDto: UpdateDrinkDto) {
    return this.db.drinks.update({
      data: updateDrinkDto,
      where: {
        id: id
      }
    })
  }

  remove(id: number) {
    return this.db.drinks.delete({
      where: {
        id: id
      }
    })
  }
}
