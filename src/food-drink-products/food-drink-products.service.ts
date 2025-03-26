import { Injectable } from '@nestjs/common';
import { CreateFoodDrinkProductDto } from './dto/create-food-drink-product.dto';
import { UpdateFoodDrinkProductDto } from './dto/update-food-drink-product.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FoodDrinkProductsService {
  constructor ( private db: PrismaService){};

 /* create(CreateFoodDrinkProductDto: CreateFoodDrinkProductDto) {
  return this.db.products.create({
      data: {
        productName: CreateFoodDrinkProductDto.productName,
        price: CreateFoodDrinkProductDto.price,
        unit: CreateFoodDrinkProductDto.unit,
        productGroup: {
          connect: {
            id: CreateFoodDrinkProductDto.productGroupId
          }
        }
      }
    })
  } */
 
  async findAll(CreateFoodDrinkProductDto: CreateFoodDrinkProductDto) {
    const response = await this.db.productGroups.findFirst({
      where:{
        groupName: CreateFoodDrinkProductDto.productGroupName
      }
    })
    
    return this.db.products.findMany({
      where:{
        productGroupId : response.id
      }
    });
    
   }
 
   findOne(id: number) {
     return this.db.products.findUnique({
       where: {
         id: id
       }
     });
   }
 
   update(id: number, UpdateFoodDrinkProductDto: UpdateFoodDrinkProductDto) {
     return this.db.products.update({
       data: UpdateFoodDrinkProductDto,
       where: {
         id: id
       }
     })
   }
 
   remove(id: number) {
     return this.db.products.delete({
       where: {
         id: id
       }
     })
   }
}
