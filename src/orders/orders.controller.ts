import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { ApiTags, ApiBearerAuth, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  /**
   * Creates a new order
   * 
   * @param createOrderDto The data of the new order
   * @returns The created order
   */
  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiBody({
    description: 'The data of the new order',
    type: CreateOrderDto,
  })
  @ApiResponse({
    status: 201,
    description: 'The new order was created successfully',
    schema: {
      example: {
        id: 1,
        date: '2025-04-11T12:00:00.000Z',
        status: 'pending',
        userId: 1,
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized. Missing or invalid token.',
  })
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  /**
   * Returns all orders
   * 
   * @returns An array of all orders
   */
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get()
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all orders',
    schema: {
      example: [
        {
          id: 1,
          date: '2025-04-11T12:00:00.000Z',
          status: 'pending',
          userId: 1,
        },
        {
          id: 2,
          date: '2025-04-12T15:30:00.000Z',
          status: 'completed',
          userId: 2,
        },
      ],
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized. Missing or invalid token.',
  })
  findAll() {
    return this.ordersService.findAll();
  }

  /**
   * Returns the data of an order with the given ID
   * 
   * @param id The ID of the order
   * @returns The order data
   */
  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'The ID of the order to retrieve',
    type: 'number',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved the order',
    schema: {
      example: {
        id: 1,
        date: '2025-04-11T12:00:00.000Z',
        status: 'pending',
        userId: 1,
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Order not found',
  })
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  /**
   * Updates the data of an order with the given ID
   * 
   * @param id The ID of the order to update
   * @param updateOrderDto The data to update the order with
   * @returns The updated order data
   */
  @Patch(':id')
  @ApiParam({
    name: 'id',
    description: 'The ID of the order to update',
    type: 'number',
    example: 1,
  })
  @ApiBody({
    description: 'The data to update the order with',
    type: UpdateOrderDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully updated the order',
    schema: {
      example: {
        id: 1,
        date: '2025-04-11T12:00:00.000Z',
        status: 'completed',
        userId: 1,
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Order not found',
  })
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto);
  }

  /**
   * Deletes an order with the given ID
   * 
   * @param id The ID of the order to delete
   * @returns A success message
   */
  @Delete(':id')
  @ApiParam({
    name: 'id',
    description: 'The ID of the order to delete',
    type: 'number',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully deleted the order',
    schema: {
      example: {
        message: 'Order deleted successfully',
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Order not found',
  })
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}
