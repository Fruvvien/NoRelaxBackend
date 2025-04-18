import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, BadRequestException, NotFoundException } from '@nestjs/common';
import { FoodDrinkProductsService } from './food-drink-products.service';
import { CreateFoodDrinkProductDto } from './dto/create-food-drink-product.dto';
import { UpdateFoodDrinkProductDto } from './dto/update-food-drink-product.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { ApiTags, ApiBearerAuth, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('FoodDrinkProducts')
@Controller('foodDrinkProducts')
export class FoodDrinkProductsController {
  constructor(private readonly foodDrinkProductsService: FoodDrinkProductsService) {}

  /**
   * Creates a new food or drink product
   * 
   * @param CreateFoodDrinkProductDto The data of the new product
   * @returns The created product
   */
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post()
  @ApiBody({
    description: 'The data of the new food or drink product',
    type: CreateFoodDrinkProductDto,
  })
  @ApiResponse({
    status: 201,
    description: 'The new product was created successfully',
    schema: {
      example: {
        id: 1,
        productName: 'Borsodi csapolt',
        price: 500,
        unit: '5 dl',
        productGroupId: 1,
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid data',
  })
  create(@Body() CreateFoodDrinkProductDto: CreateFoodDrinkProductDto) {
    try {
      return this.foodDrinkProductsService.create(CreateFoodDrinkProductDto);
    } catch {
      throw new BadRequestException('Érvénytelen adat');
    }
  }

  /**
   * Returns all food and drink products
   * 
   * @returns An array of all products
   */
  @Get()
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all products',
    schema: {
      example: [
        {
          id: 1,
          productName: 'Borsodi csapolt',
          price: 500,
          unit: '5 dl',
          productGroupId: 1,
        },
        {
          id: 2,
          productName: 'Heineken csapolt',
          price: 450,
          unit: '5 dl',
          productGroupId: 1,
        },
      ],
    },
  })
  async findAllProducts() {
    return await this.foodDrinkProductsService.findAllProducts();
  }

  /**
   * Returns all products in a specific product group
   * 
   * @param productGroup The name of the product group
   * @returns An array of products in the specified group
   */
 
  @ApiBearerAuth()
  @Get(':productGroup')
  @ApiParam({
    name: 'productGroup',
    description: 'The name of the product group to retrieve products for',
    type: 'string',
    example: 'Drinks',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved products in the specified group',
    schema: {
      example: [
        {
          id: 1,
          productName: 'Borsodi csapolt',
          price: 500,
          unit: '5 dl',
          productGroupId: 1,
        },
      ],
    },
  })
  findAll(@Param('productGroup') productGroup: string) {
    return this.foodDrinkProductsService.findAll(productGroup);
  }

  /**
   * Returns a specific product by ID
   * 
   * @param id The ID of the product
   * @returns The product data
   */
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'The ID of the product to retrieve',
    type: 'number',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved the product',
    schema: {
      example: {
        id: 1,
        productName: 'Borsodi csapolt',
        price: 500,
        unit: '5 dl',
        productGroupId: 1,
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found',
  })
  async findOne(@Param('id') id: string) {
    try {
      const drink = await this.foodDrinkProductsService.findOne(+id);
      return drink;
    } catch {
      throw new NotFoundException('Nincs ilyen ID-val rendelkező ital');
    }
  }

  /**
   * Updates a specific product by ID
   * 
   * @param id The ID of the product to update
   * @param updateDrinkDto The data to update the product with
   * @returns The updated product
   */
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Patch(':id')
  @ApiParam({
    name: 'id',
    description: 'The ID of the product to update',
    type: 'number',
    example: 1,
  })
  @ApiBody({
    description: 'The data to update the product with',
    type: UpdateFoodDrinkProductDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully updated the product',
    schema: {
      example: {
        id: 1,
        productName: 'Borsodi dobozos',
        price: 550,
        unit: '5 dl',
        productGroupId: 1,
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found',
  })
  async update(@Param('id') id: string, @Body() updateDrinkDto: UpdateFoodDrinkProductDto) {
    try {
      const drinkToUpdate = await this.foodDrinkProductsService.update(+id, updateDrinkDto);
      return drinkToUpdate;
    } catch {
      throw new NotFoundException('Nincs ilyen ID-val rendelkező ital, így sikertelen az adatok frissítése');
    }
  }

  /**
   * Deletes a specific product by ID
   * 
   * @param id The ID of the product to delete
   * @returns A success message
   */
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  @ApiParam({
    name: 'id',
    description: 'The ID of the product to delete',
    type: 'number',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully deleted the product',
    schema: {
      example: {
        message: 'Product deleted successfully',
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found',
  })
  async remove(@Param('id') id: string) {
    try {
      const drinkToRemove = await this.foodDrinkProductsService.remove(+id);
      return drinkToRemove;
    } catch {
      throw new NotFoundException('Nincs ilyen ID-val rendelkező ital, így sikertelen az adat törlése');
    }
  }
}
