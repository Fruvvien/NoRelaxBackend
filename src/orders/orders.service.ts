import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma.service';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class OrdersService {
  constructor(private db: PrismaService, private product: ProductsService){}

  async create(createOrderDto: CreateOrderDto) {
    console.log(createOrderDto.reservationId);
    
    
    try{
      const order = await this.db.order.create({
        data: {
          user:{
            connect: {id: parseInt(createOrderDto.userId)}
          },
          reservation:  { connect: { id: createOrderDto.reservationId } },
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

  async findAll() {
    return await this.db.order.findMany();
  }

  findOne(id: number) {
    return this.db.order.findUnique({
      where: {
        id: id
      },
      include: {
        orderitem: true,
        reservation: true,
        user: true,
      }
    });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.db.order.update({
      where: {
        id: id
      },
      data:{
        status: updateOrderDto.status,
      }
    });
  }

  remove(id: number) {
    return this.db.order.delete({
      where: {
        id: id
      }
    });
  }
}
