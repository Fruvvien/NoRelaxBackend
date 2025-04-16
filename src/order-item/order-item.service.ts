import { Injectable } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrderItemService {
  constructor(private db: PrismaService) {}

  create(createOrderItemDto: CreateOrderItemDto) {
    return this.db.orderitem.create(
      {
        data: {
          productName: createOrderItemDto.productName,
          unit: createOrderItemDto.unit,
          price: createOrderItemDto.price,
          quantity: createOrderItemDto.quantity,
          order: {
            connect: { id: createOrderItemDto.orderId },
          },
        },
      },
    );
  }

  findAll() {
    return this.db.orderitem.findMany();
  }

  findOne(id: number) {
    return this.db.orderitem.findUnique({
      where: {
        id: id,
        },
      });
  }

  update(id: number, updateOrderItemDto: UpdateOrderItemDto) {
    return this.db.orderitem.update({
      where:{
        id: id,
      },
      data:{
        productName: updateOrderItemDto.productName,
        unit: updateOrderItemDto.unit,
        price: updateOrderItemDto.price,
        quantity: updateOrderItemDto.quantity,
      },
    }
  );
  }

  remove(id: number) {
    return this.db.orderitem.delete({
      where: {
        id: id,
      },
      });
  }
}
