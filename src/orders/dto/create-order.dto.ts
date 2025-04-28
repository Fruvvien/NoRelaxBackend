import { CreateProductDto } from "src/products/dto/create-product.dto";
import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {
  /**
   * The total price of the order
   */
  @ApiProperty({
    description: 'The total price of the order',
    example: 15000,
  })
  fullPrice: number;

  /**
   * The ID of the user who placed the order
   */
  @ApiProperty({
    description: 'The ID of the user who placed the order',
    example: '1',
  })
  userId: string;

  /**
   * The list of products in the order
   */
  @ApiProperty({
    description: 'The list of products in the order',
    type: [CreateProductDto],
    example: [
      {
        productId: 1,
        quantity: 2,
      },
      {
        productId: 2,
        quantity: 1,
      },
    ],
  })
  order: CreateProductDto[];

  /**
   * The reservation ID associated with the order
   */
  @ApiProperty({
    description: 'The reservation ID associated with the order',
    example: 123,
  })
  reservationId: number | null;
}
