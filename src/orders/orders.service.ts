import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma.service';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class OrdersService {
  constructor(private db: PrismaService, private product: ProductsService){}

  async create(createOrderDto: CreateOrderDto) {
    try{
      const order = await this.db.order.create({
        data: {
          user:{
            connect: {id: parseInt(createOrderDto.userId)}
          },
          reservation: {
            connect: {id : createOrderDto.reservationId || null}
          },
          fullPrice: createOrderDto.fullPrice,
        },
        include: {
          orderitem: true,
        }
      });
      await this.product.create(createOrderDto.order, order.id);
      return JSON.stringify("Sikeres rendelés");
    }catch(e){
      return JSON.stringify(e);
    }
    

  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
