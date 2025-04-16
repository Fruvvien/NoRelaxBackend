import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { OrderItemService } from './order-item.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@ApiTags('Order Items')
@ApiBearerAuth() 
@Controller('order-item')
export class OrderItemController {
  constructor(private readonly orderItemService: OrderItemService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create a new order item' })
  @ApiResponse({ status: 201, description: 'Order item successfully created.' })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  create(@Body() createOrderItemDto: CreateOrderItemDto) {
    return this.orderItemService.create(createOrderItemDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'Retrieve all order items' })
  @ApiResponse({ status: 200, description: 'List of order items.' })
  findAll() {
    return this.orderItemService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a specific order item by ID' })
  @ApiParam({ name: 'id', description: 'ID of the order item', type: String })
  @ApiResponse({ status: 200, description: 'Order item found.' })
  @ApiResponse({ status: 404, description: 'Order item not found.' })
  findOne(@Param('id') id: string) {
    return this.orderItemService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Update an existing order item' })
  @ApiParam({ name: 'id', description: 'ID of the order item', type: String })
  @ApiResponse({ status: 200, description: 'Order item successfully updated.' })
  @ApiResponse({ status: 404, description: 'Order item not found.' })
  update(@Param('id') id: string, @Body() updateOrderItemDto: UpdateOrderItemDto) {
    return this.orderItemService.update(+id, updateOrderItemDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete an order item' })
  @ApiParam({ name: 'id', description: 'ID of the order item', type: String })
  @ApiResponse({ status: 200, description: 'Order item successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Order item not found.' })
  remove(@Param('id') id: string) {
    return this.orderItemService.remove(+id);
  }
}