import { CreateProductDto } from "src/products/dto/create-product.dto";

export class CreateOrderDto {
  fullPrice: number;
  userId: string;
  order: CreateProductDto[];
  reservationId: number;
}
