import { IsBoolean, IsNumber, IsString, IsISO8601 } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateReservationDto {
  /**
   * The date and time of the reservation
   */
  @ApiProperty({
    description: 'The date and time of the reservation in ISO 8601 format',
    example: '2025-04-11T18:00:00.000Z',
  })
  @IsISO8601()
  @IsString()
  reservationDate: string;

  /**
   * Indicates whether the reservation is active
   */
  @ApiProperty({
    description: 'Indicates whether the reservation is active',
    example: true,
  })
  @IsBoolean()
  isReserved: boolean;

  /**
   * The ID of the user making the reservation
   */
  @ApiPropertyOptional({
    description: 'The ID of the user making the reservation',
    example: '1',
  })
  @IsString()
  userId?: string | null;

  /**
   * The table number for the reservation
   */
  @ApiProperty({
    description: 'The table number for the reservation',
    example: 5,
  })
  @IsNumber()
  tableNumber: number;

  /**
   * The number of seats reserved
   */
  @ApiProperty({
    description: 'The number of seats reserved',
    example: 4,
  })
  @IsNumber()
  seats: number;
}
