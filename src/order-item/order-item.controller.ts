import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { OrderItemService } from './order-item.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { ApiTags, ApiBearerAuth, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Order Items')
@Controller('order-item')
export class OrderItemController {
  constructor(private readonly orderItemService: OrderItemService) {}

  /**
   * Creates a new order item
   *
   * @param createOrderItemDto The data of the new order item
   * @returns The created order item
   */
  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiBody({
    description: 'The data of the new order item',
    type: CreateOrderItemDto,
  })
  @ApiResponse({
    status: 201,
    description: 'The new order item was created successfully',
    schema: {
      example: {
        id: 1,
        productName: 'Borsodi csapolt',
        unit: '5 dl',
        price: 400,
        quantity: 2,
        orderId: 1,
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data.',
  })
  create(@Body() createOrderItemDto: CreateOrderItemDto) {
    return this.orderItemService.create(createOrderItemDto);
  }

  /**
   * Returns all order items
   *
   * @returns An array of all order items
   */
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get()
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all order items',
    schema: {
      example: [
        {
          id: 1,
          productName: 'Borsodi csapolt',
          unit: '5 dll',
          price: 400,
          quantity: 2,
          orderId: 1,
        },
        {
          id: 2,
          productName: 'Coca-Cola',
          unit: '5 dl',
          price: 400,
          quantity: 3,
          orderId: 1,
        },
      ],
    },
  })
  findAll() {
    return this.orderItemService.findAll();
  }

  /**
   * Returns order items by order ID
   *
   * @param id The ID of the order
   * @returns The order items associated with the given order ID
   */
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiParam({
    name: 'id',
    description: 'The ID of the order',
    type: 'number',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved the order items',
    schema: {
      example: [
        {
          id: 1,
          productName: 'Borsodi csapolt',
          unit: '0.5 l',
          price: 500,
          quantity: 2,
          orderId: 1,
        },
      ],
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Order items not found',
  })
  findAllByOrderId(@Param('id') id: string) {
    return this.orderItemService.findallByOrderId(+id);
  }

  /**
   * Updates an order item
   *
   * @param id The ID of the order item to update
   * @param updateOrderItemDto The data to update the order item with
   * @returns The updated order item
   */
  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiParam({
    name: 'id',
    description: 'The ID of the order item to update',
    type: 'number',
    example: 1,
  })
  @ApiBody({
    description: 'The data to update the order item with',
    type: UpdateOrderItemDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully updated the order item',
    schema: {
      example: {
        id: 1,
        productName: 'Borsodi csapolt',
        unit: '5 dl',
        price: 400,
        quantity: 3,
        orderId: 1,
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Order item not found',
  })
  update(@Param('id') id: string, @Body() updateOrderItemDto: UpdateOrderItemDto) {
    return this.orderItemService.update(+id, updateOrderItemDto);
  }

  /**
   * Deletes an order item
   *
   * @param id The ID of the order item to delete
   * @returns A success message
   */
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiParam({
    name: 'id',
    description: 'The ID of the order item to delete',
    type: 'number',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully deleted the order item',
    schema: {
      example: {
        message: 'Order item deleted successfully',
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Order item not found',
  })
  remove(@Param('id') id: string) {
    return this.orderItemService.remove(+id);
  }
}