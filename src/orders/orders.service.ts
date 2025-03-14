import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private db: PrismaService){}

  create(createOrderDto: CreateOrderDto) {
     try
        {
          return this.db.order.create({
            data: {
              user:{
                connect: {id: parseInt(createOrderDto.userId)}
              },
              date: new Date(),
              order: createOrderDto.order,
              reservation: {
                connect: {id : createOrderDto.reservationId || null}
              }
            }
          });
    
        }
        catch(e){
          return e;
          
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
