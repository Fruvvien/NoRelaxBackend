import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Adds a new user to the database
   * 
   * @param createUserDto The data of the new user
   * @returns The created user data
   */
  @Post()
  @ApiResponse({
    status: 201,
    description: 'The new user was created successfully',
    schema: {
      example: {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'asd@gmail.com',
        password: 'hashed_password',
        accountType: 'user',
        createdAt: '2021-09-29T06:30:00.000Z',
        accountIsActive: true,
        reservationId: null,
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  /**
   * Returns all users in the database
   * 
   * @returns An array of all users
   */
  @Get()
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all users',
    schema: {
      example: [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          email: 'asd@gmail.com',
          password: 'hashed_password',
          accountType: 'user',
          createdAt: '2021-09-29T06:30:00.000Z',
          accountIsActive: true,
          reservationId: null,
        },
        {
          id: 2,
          firstName: 'Jane',
          lastName: 'Smith',
          email: 'jane.smith@gmail.com',
          password: 'hashed_password',
          accountType: 'admin',
          createdAt: '2021-09-30T06:30:00.000Z',
          accountIsActive: true,
          reservationId: null,
        },
      ],
    },
  })
  findAll() {
    return this.userService.findAll();
  }

  /**
   * Returns the data of a user with the given ID
   * 
   * @param id The ID of the user
   * @returns The user data
   */
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiParam({
    name: 'id',
    description: 'The ID of the user to retrieve',
    type: 'number',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved the user',
    schema: {
      example: {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'asd@gmail.com',
        password: 'hashed_password',
        accountType: 'user',
        createdAt: '2021-09-29T06:30:00.000Z',
        accountIsActive: true,
        reservationId: null,
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
  })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  /**
   * Updates the data of a user with the given ID
   * 
   * @param id The ID of the user to update
   * @param updateUserDto The data to update the user with
   * @returns The updated user data
   */
  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiParam({
    name: 'id',
    description: 'The ID of the user to update',
    type: 'number',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully updated the user',
    schema: {
      example: {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'asd@gmail.com',
        password: 'hashed_password',
        accountType: 'user',
        createdAt: '2021-09-29T06:30:00.000Z',
        accountIsActive: true,
        reservationId: null,
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
  })
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(+id, updateUserDto);
  }
}
