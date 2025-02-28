import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FoodsService {
  constructor(private db: PrismaService){};

  create(createFoodDto: CreateFoodDto) {
    return this.db.foods.create({
      data: {
        ...createFoodDto
      }
    })
  }

  findAll() {
    return this.db.foods.findMany();
  }

  findOne(id: number) {
    return this.db.foods.findUnique({
      where: {
        id: id
      }
    });
  }

  update(id: number, updateFoodDto: UpdateFoodDto) {
    return this.db.foods.update({
      data: updateFoodDto,
      where: {
        id: id
      }
    })
  }

  remove(id: number) {
    return this.db.foods.delete({
      where: {
        id: id
      }
    })
  }
}
