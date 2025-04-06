import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {  ApiParam, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * adds an user to the database
   * 
   * @param createUserDto the data of the new user
   * @returns all the data of the new user
   */
  @Post()
  @ApiResponse({
    status: 201,
    description: 'The new user was created successfully',
    example: {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'asd@gmail.com',
      password: 'password',
      accountType: 'user',
      createdAt: '2021-09-29T06:30:00.000Z',
      accountIsActive: true,
      reservationId: null
    }
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
 

  /**
   * Returns all the users in the database
   * 
   * @returns all the data of the new user
   */
  @Post()
  @ApiResponse({
    status: 201,
    description: 'get all users successfully',
    example: 
      [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'asd@gmail.com',
        password: 'password',
        accountType: 'user',
        createdAt: '2021-09-29T06:30:00.000Z',
        accountIsActive: true,
        reservationId: null
      },
      {
        id: 2,
        firstName: 'Asd',
        lastName: 'Dsa',
        email: 'dsa@gmail.com',
        password: 'password1',
        accountType: 'user',
        createdAt: '2021-09-29T06:30:00.000Z',
        accountIsActive: true,
        reservationId: null
      },
    
    ]
    
  })
  @Get()
  findAll() {
    return this.userService.findAll();
  }


  /**
   * Returns the data of a user with the given ID
   * 
   * @param id The ID of the user
   * @returns 
   */
  @ApiParam({
    name: 'id',
    description: 'The id of the user to get',
    type: 'number',
    example: 1
  })
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  /**
   * returns the updated data of the user
   * 
   * @param id The ID of the user to update
   * @param updateUserDto  The data to update the user with 
   * @returns 
   */
  @ApiParam({
    name: 'id',
    description: 'The id of the user to update',
    type: 'number',
    example: 1
  })
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(+id, updateUserDto);
  }

  /**
   * Deletes a user from the database
   * 
   * @param id The ID of the user to delete
   * @returns 
   */
  @ApiParam({
    name: 'id',
    description: 'The id of the user to delete',
    type: 'number',
    example: 1
  })
  
  @Delete(':id')
   remove(@Param('id') id: string) {
    return  this.userService.remove(+id);
  }
}
