import { IsBoolean,  IsNumber,  IsString } from "class-validator";
import { Transform } from 'class-transformer';
import { IsISO8601 } from 'class-validator';

export class CreateReservationDto {
  



  /* @Transform(({ value }) => {
    if (!value) return null;
  
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      console.error('Invalid date:', value);
      return null;
    }
  
    const correctedDate = new Date(date.getTime() + 2 * 60 * 60 * 1000);
    return correctedDate.toISOString();
  }) */

    @IsISO8601()
    @IsString()
    reservationDate: string;

    @IsBoolean()
    isReserved: boolean

    @IsString()
    userId?: string |null

    @IsNumber()
    tableNumber: number
    
    @IsNumber()
    seats: number
}
