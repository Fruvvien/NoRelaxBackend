import { Controller, Get, Post, Body, Param, Delete, UseGuards, Put, Query } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { ApiTags, ApiBearerAuth, ApiResponse, ApiParam, ApiBody, ApiQuery } from '@nestjs/swagger';

@ApiTags('Reservation')
@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  /**
   * Creates a new reservation
   * 
   * @param createReservationDto The data of the new reservation
   * @returns The created reservation
   */
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post()
  @ApiBody({
    description: 'The data of the new reservation',
    type: CreateReservationDto,
  })
  @ApiResponse({
    status: 201,
    description: 'The new reservation was created successfully',
    schema: {
      example: {
        id: 1,
        reservationDate: '2025-04-11T18:00:00.000Z',
        tableNumber: 5,
        seats: 4,
        isReserved: true,
        userId: 1,
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized. Missing or invalid token.',
  })
  create(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationService.create(createReservationDto);
  }

  /**
   * Returns all reservations
   * 
   * @returns An array of all reservations
   */
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get()
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all reservations',
    schema: {
      example: [
        {
          id: 1,
          reservationDate: '2025-04-11T18:00:00.000Z',
          tableNumber: 5,
          seats: 4,
          isReserved: true,
          userId: 1,
        },
        {
          id: 2,
          reservationDate: '2025-04-12T20:00:00.000Z',
          tableNumber: 3,
          seats: 2,
          isReserved: false,
          userId: 2,
        },
      ],
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized. Missing or invalid token.',
  })
  async findAll() {
    return await this.reservationService.findAll();
  }

  /**
   * Returns reservations for a specific user
   * 
   * @param id The ID of the user
   * @returns An array of reservations for the user
   */
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'The ID of the user to retrieve reservations for',
    type: 'number',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved reservations for the user',
    schema: {
      example: [
        {
          id: 1,
          reservationDate: '2025-04-11T18:00:00.000Z',
          tableNumber: 5,
          seats: 4,
          isReserved: true,
          userId: 1,
        },
      ],
    },
  })
  @ApiResponse({
    status: 404,
    description: 'No reservations found for the user',
  })
  async findManyWithId(@Param('id') id: string) {
    return await this.reservationService.findMany(+id);
  }

  /**
   * Updates a reservation with the given ID
   * 
   * @param id The ID of the reservation to update
   * @param updateReservationDto The data to update the reservation with
   * @returns The updated reservation
   */
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Put(':id')
  @ApiParam({
    name: 'id',
    description: 'The ID of the reservation to update',
    type: 'number',
    example: 1,
  })
  @ApiBody({
    description: 'The data to update the reservation with',
    type: UpdateReservationDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully updated the reservation',
    schema: {
      example: {
        id: 1,
        reservationDate: '2025-04-11T18:00:00.000Z',
        tableNumber: 5,
        seats: 4,
        isReserved: false,
        userId: 1,
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Reservation not found',
  })
  async update(@Param('id') id: string, @Body() updateReservationDto: UpdateReservationDto) {
    return await this.reservationService.update(+id, updateReservationDto);
  }

  /**
   * Deletes a reservation with the given ID
   * 
   * @param id The ID of the reservation to delete
   * @param userId The ID of the user associated with the reservation
   * @returns A success message
   */
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  @ApiParam({
    name: 'id',
    description: 'The ID of the reservation to delete',
    type: 'number',
    example: 1,
  })
  @ApiQuery({
    name: 'userId',
    description: 'The ID of the user associated with the reservation',
    type: 'number',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully deleted the reservation',
    schema: {
      example: {
        message: 'Reservation deleted successfully',
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Reservation not found',
  })
  async remove(@Param('id') id: string, @Query('userId') userId: string) {
    return await this.reservationService.remove(+id, +userId);
  }
}
