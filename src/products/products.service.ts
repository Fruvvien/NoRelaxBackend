import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private db: PrismaService){}

  async create(createProductDto: CreateProductDto[], orderId: number) {
    createProductDto.map( async(product) => {
      await this.db.orderitem.create({
        data: {
          productName: product.productName,
          unit: product.unit,
          price: product.price,
          quantity: product.quantity,
          order: {
            connect: {id: orderId}
          }
      }
    });
    })
      
  }
}
